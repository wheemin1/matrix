import { Handler, HandlerEvent, HandlerResponse } from '@netlify/functions';

// This function detects search engine bots and sets appropriate headers
const handler: Handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  const userAgent = event.headers['user-agent'] || '';
  const url = event.queryStringParameters?.url || '/';
  const isBot = /bot|googlebot|crawler|spider|yandex|bingbot/i.test(userAgent);

  // If it's a search engine crawler, add prerendered flag
  if (isBot) {
    return {
      statusCode: 200,
      headers: {
        'X-Prerendered': 'true',
        'Content-Type': 'text/html',
        'X-Robots-Tag': 'all',
        'Cache-Control': 'public, max-age=60, s-maxage=300'
      },
      body: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="refresh" content="0;url=${url}" />
  <title>운명의 매트릭스 (Destiny Matrix)</title>
  <link rel="canonical" href="https://destiny33.site${url}" />
</head>
<body>
  <p>Please wait, redirecting to <a href="${url}">운명의 매트릭스</a>...</p>
</body>
</html>`,
    };
  }

  // Otherwise let the normal page load
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Not a bot, proceeding with normal render',
      isBot: false,
      url,
    }),
  };
};

export { handler };
