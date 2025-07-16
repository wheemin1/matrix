import { Handler, HandlerEvent, HandlerResponse } from '@netlify/functions';
import fetch from 'node-fetch';

// This function generates static HTML snapshots for search engines
const handler: Handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  const path = event.path || '/';
  const cleanPath = path.replace(/^\/.netlify\/functions\/snapshot-generator/, '');
  const fullUrl = `https://destiny33.site${cleanPath || '/'}`;
  
  // Only proceed for search engines
  const userAgent = event.headers['user-agent'] || '';
  const isBot = /bot|googlebot|crawler|spider|yandex|bingbot/i.test(userAgent);
  
  if (!isBot) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'This endpoint is designed for search engines only',
      }),
    };
  }
  
  try {
    // Fetch the pre-rendered HTML from the actual site
    const response = await fetch(fullUrl, {
      headers: {
        'User-Agent': userAgent,
        'X-Requested-With': 'XMLHttpRequest',
        'X-Prerender-Request': 'true',
      },
    });
    
    const html = await response.text();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
        'X-Robots-Tag': 'all',
        'Cache-Control': 'public, max-age=300, s-maxage=600',
      },
      body: html,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate snapshot' }),
    };
  }
};

export { handler };
