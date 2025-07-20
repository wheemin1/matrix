import { Handler, HandlerEvent, HandlerResponse } from '@netlify/functions';
import fetch from 'node-fetch';

// This function detects search engine bots and returns optimized content
const handler: Handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  const userAgent = event.headers['user-agent'] || '';
  const url = event.queryStringParameters?.url || '/';
  const path = url.startsWith('/') ? url : `/${url}`;
  const fullUrl = `https://destiny33.site${path}`;
  const isBot = /bot|googlebot|crawler|spider|yandex|bingbot/i.test(userAgent);

  // If it's a search engine crawler, provide optimized HTML content
  if (isBot) {
    try {
      // Fetch the index.html as a base template
      const response = await fetch('https://destiny33.site/', {
        headers: {
          'User-Agent': userAgent,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch base template: ${response.statusText}`);
      }

      // Get the page HTML
      let html = await response.text();

      // Replace canonical URL and OG URL for the specific path
      html = html.replace(
        /<link rel="canonical" href="https:\/\/destiny33\.site\/">/g,
        `<link rel="canonical" href="https://destiny33.site${path}">`
      );
      
      html = html.replace(
        /<meta property="og:url" content="https:\/\/destiny33\.site\/">/g,
        `<meta property="og:url" content="https://destiny33.site${path}">`
      );

      // Add route-specific metadata based on path
      let pageTitle = '운명의 매트릭스 (Destiny Matrix)';
      let pageDescription = '운명의 매트릭스 분석 서비스. 타로, MBTI, 사주를 결합한 운명 분석 서비스 \"운명의 매트릭스 검사\". 고유한 22가지 아르카나 코드로 당신의 성격과 운명을 분석합니다.';
      
      if (path === '/personal') {
        pageTitle = '운명의 매트릭스 - 개인 분석 | 당신의 운명코드';
        pageDescription = '운명의 매트릭스 개인 분석 서비스. 당신만의 아르카나 코드를 확인하고 성격, 연애, 직업 등 다양한 분석 정보를 제공받으세요.';
      } else if (path === '/couple') {
        pageTitle = '운명의 매트릭스 - 커플 분석 | 연애 궁합 및 관계 분석';
        pageDescription = '운명의 매트릭스 커플 분석 서비스. 두 사람의 운명 코드를 비교하여 궁합과 관계 특성을 분석합니다.';
      } else if (path === '/tarot-cards') {
        pageTitle = '운명의 매트릭스 - 타로 카드 정보 | 타로와 운명의 관계';
        pageDescription = '타로 카드에 대한 상세 정보와 운명의 매트릭스에서의 역할을 알아보세요.';
      } else if (path === '/faq') {
        pageTitle = '운명의 매트릭스 - 자주 묻는 질문 | FAQ';
        pageDescription = '운명의 매트릭스에 대한 자주 묻는 질문과 답변을 찾아보세요.';
      }
      
      // Update the title and description in the HTML
      html = html.replace(
        /<title>운명의 매트릭스 \(Destiny Matrix\)<\/title>/g,
        `<title>${pageTitle}</title>`
      );
      
      html = html.replace(
        /<meta name="description" content="[^"]*">/g,
        `<meta name="description" content="${pageDescription}">`
      );
      
      // Add prerendered marker
      html = html.replace('</head>', `<meta name="_prerendered" content="true" />
<link rel="alternate" href="https://destiny33.site${path}" hreflang="ko" />
</head>`);
      
      // Add a note for bots that this is a prerendered version
      html = html.replace('<div id="root"></div>', '<div id="root" data-prerendered="true"></div>');
      
      return {
        statusCode: 200,
        headers: {
          'X-Prerendered': 'true',
          'Content-Type': 'text/html',
          'X-Robots-Tag': 'all, index, follow',
          'Cache-Control': 'public, max-age=60, s-maxage=300',
          'Link': `<https://destiny33.site${path}>; rel="canonical"`,
          'Vary': 'User-Agent',
          'X-Canonical-URL': `https://destiny33.site${path}`
        },
        body: html,
      };
    } catch (error) {
      console.error('Error in dynamic rendering:', error);
      
      // Fallback response if something goes wrong
      return {
        statusCode: 200,
        headers: {
          'X-Prerendered': 'true',
          'Content-Type': 'text/html',
          'X-Robots-Tag': 'all, index, follow',
          'Cache-Control': 'public, max-age=60, s-maxage=300',
          'Link': `<https://destiny33.site${path}>; rel="canonical"`,
          'Vary': 'User-Agent',
          'X-Canonical-URL': `https://destiny33.site${path}`
        },
        body: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>운명의 매트릭스 (Destiny Matrix)</title>
  <link rel="canonical" href="https://destiny33.site${path}" />
  <meta name="description" content="운명의 매트릭스 분석 서비스. 타로, MBTI, 사주를 결합한 운명 분석 서비스." />
</head>
<body>
  <h1>운명의 매트릭스</h1>
  <p>이 페이지는 검색 엔진을 위한 버전입니다. <a href="https://destiny33.site${path}">여기</a>를 클릭하여 완전한 버전을 볼 수 있습니다.</p>
</body>
</html>`,
      };
    }
  }

  // For regular users, proceed with normal rendering
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
