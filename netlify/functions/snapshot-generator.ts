import { Handler, HandlerEvent, HandlerResponse } from '@netlify/functions';
import fetch from 'node-fetch';

// This function generates static HTML snapshots for search engines
const handler: Handler = async (event: HandlerEvent): Promise<HandlerResponse> => {
  // Get the path and clean it
  const path = event.path || '/';
  const cleanPath = path.replace(/^\/.netlify\/functions\/snapshot-generator/, '');
  const requestedPath = cleanPath || '/';
  const fullUrl = `https://destiny33.site${requestedPath}`;
  
  // Get query parameters
  const { _escaped_fragment_ } = event.queryStringParameters || {};
  
  // Check if it's a search engine bot
  const userAgent = event.headers['user-agent'] || '';
  const isBot = /bot|googlebot|crawler|spider|yandex|bingbot/i.test(userAgent);
  
  // Respond for non-bots with info unless they use _escaped_fragment_
  if (!isBot && !_escaped_fragment_) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'This endpoint is designed for search engines or AJAX crawling with _escaped_fragment_',
        path: requestedPath,
        fullUrl,
      }),
    };
  }
  
  try {
    // Prepare route-specific metadata
    let pageTitle = '운명의 매트릭스 (Destiny Matrix)';
    let pageDescription = '운명의 매트릭스 분석 서비스. 타로, MBTI, 사주를 결합한 운명 분석 서비스 \"운명의 매트릭스 검사\". 고유한 22가지 아르카나 코드로 당신의 성격과 운명을 분석합니다.';
    
    if (requestedPath === '/personal') {
      pageTitle = '운명의 매트릭스 - 개인 분석 | 당신의 운명코드';
      pageDescription = '운명의 매트릭스 개인 분석 서비스. 당신만의 아르카나 코드를 확인하고 성격, 연애, 직업 등 다양한 분석 정보를 제공받으세요.';
    } else if (requestedPath === '/couple') {
      pageTitle = '운명의 매트릭스 - 커플 분석 | 연애 궁합 및 관계 분석';
      pageDescription = '운명의 매트릭스 커플 분석 서비스. 두 사람의 운명 코드를 비교하여 궁합과 관계 특성을 분석합니다.';
    } else if (requestedPath === '/tarot-cards') {
      pageTitle = '운명의 매트릭스 - 타로 카드 정보 | 타로와 운명의 관계';
      pageDescription = '타로 카드에 대한 상세 정보와 운명의 매트릭스에서의 역할을 알아보세요.';
    } else if (requestedPath === '/faq') {
      pageTitle = '운명의 매트릭스 - 자주 묻는 질문 | FAQ';
      pageDescription = '운명의 매트릭스에 대한 자주 묻는 질문과 답변을 찾아보세요.';
    }
    
    // Fetch the index.html to use as a template
    const response = await fetch('https://destiny33.site/', {
      headers: {
        'User-Agent': userAgent || 'Netlify Snapshot Generator',
        'X-Snapshot-Request': 'true',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch base template: ${response.statusText}`);
    }
    
    // Get the HTML content
    let html = await response.text();
    
    // Update the HTML with route-specific information
    html = html.replace(
      /<link rel="canonical" href="https:\/\/destiny33\.site\/">/g,
      `<link rel="canonical" href="https://destiny33.site${requestedPath}">`
    );
    
    html = html.replace(
      /<meta property="og:url" content="https:\/\/destiny33\.site\/">/g,
      `<meta property="og:url" content="https://destiny33.site${requestedPath}">`
    );
    
    html = html.replace(
      /<title>운명의 매트릭스 \(Destiny Matrix\)<\/title>/g,
      `<title>${pageTitle}</title>`
    );
    
    html = html.replace(
      /<meta name="description" content="[^"]*">/g,
      `<meta name="description" content="${pageDescription}">`
    );
    
    // Add indicator for search engines that this is a prerendered page
    html = html.replace('</head>', '<meta name="_prerendered" content="true" />\n</head>');
    
    // Add information about the route
    html = html.replace('<div id="root"></div>', `<div id="root" data-route="${requestedPath}" data-prerendered="true"></div>`);
    
    // Add content hint for search engines
    const routeContent = getRouteContent(requestedPath);
    if (routeContent) {
      html = html.replace('<div id="root"', `<div id="seo-content" style="display:none">${routeContent}</div>\n<div id="root"`);
    }
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
        'X-Robots-Tag': 'all',
        'Cache-Control': 'public, max-age=300, s-maxage=600',
        'Link': `<https://destiny33.site${requestedPath}>; rel="canonical"`,
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
      },
      body: html,
    };
  } catch (error) {
    console.error('Error generating snapshot:', error);
    
    // Fallback content if we can't generate a proper snapshot
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
        'X-Robots-Tag': 'all',
        'Cache-Control': 'public, max-age=60, s-maxage=300',
      },
      body: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>운명의 매트릭스 (Destiny Matrix)</title>
  <link rel="canonical" href="https://destiny33.site${requestedPath}" />
  <meta name="description" content="운명의 매트릭스 분석 서비스" />
</head>
<body>
  <h1>운명의 매트릭스</h1>
  <p>이 페이지는 검색 엔진을 위한 버전입니다. <a href="https://destiny33.site${requestedPath}">여기</a>를 클릭하여 완전한 버전을 볼 수 있습니다.</p>
</body>
</html>`,
    };
  }
};

// Helper function to get route-specific content for SEO
function getRouteContent(path: string): string {
  switch (path) {
    case '/':
      return `
        <h1>운명의 매트릭스 (Destiny Matrix)</h1>
        <p>운명의 매트릭스는 타로, MBTI, 사주를 결합한 새로운 운명 분석 시스템입니다.</p>
        <p>당신의 성격과 운명을 22가지 아르카나 코드로 분석해 드립니다.</p>
        <h2>주요 특징</h2>
        <ul>
          <li>개인 분석: 당신만의 운명 코드 분석</li>
          <li>커플 분석: 두 사람의 운명 궁합 분석</li>
          <li>타로 카드 정보: 각 카드의 의미와 해석</li>
        </ul>
      `;
    case '/personal':
      return `
        <h1>운명의 매트릭스 - 개인 분석</h1>
        <p>당신만의 운명 코드를 확인하고 성격, 연애, 직업 등 다양한 분석 정보를 제공받으세요.</p>
        <h2>개인 분석 특징</h2>
        <ul>
          <li>성격 분석: 당신의 주요 성격 특성</li>
          <li>연애 스타일: 당신의 연애 방식과 선호하는 파트너 유형</li>
          <li>직업 적성: 당신에게 적합한 직업 분야</li>
          <li>운명의 흐름: 과거, 현재, 미래의 운명 패턴</li>
        </ul>
      `;
    case '/couple':
      return `
        <h1>운명의 매트릭스 - 커플 분석</h1>
        <p>두 사람의 운명 코드를 비교하여 궁합과 관계 특성을 분석합니다.</p>
        <h2>커플 분석 특징</h2>
        <ul>
          <li>궁합 점수: 두 사람의 전체적인 궁합 점수</li>
          <li>관계 특성: 두 사람의 관계에서 나타나는 주요 특성</li>
          <li>갈등 요소: 잠재적인 갈등 요소와 해결 방법</li>
          <li>상호 보완점: 서로를 보완하는 특성들</li>
        </ul>
      `;
    case '/tarot-cards':
      return `
        <h1>운명의 매트릭스 - 타로 카드 정보</h1>
        <p>타로 카드에 대한 상세 정보와 운명의 매트릭스에서의 역할을 알아보세요.</p>
        <h2>주요 타로 카드</h2>
        <ul>
          <li>메이저 아르카나: 22개의 주요 타로 카드</li>
          <li>마이너 아르카나: 56개의 보조 타로 카드</li>
          <li>타로와 MBTI의 연관성</li>
          <li>타로와 사주의 연관성</li>
        </ul>
      `;
    case '/faq':
      return `
        <h1>운명의 매트릭스 - 자주 묻는 질문</h1>
        <p>운명의 매트릭스에 대한 자주 묻는 질문과 답변을 찾아보세요.</p>
        <h2>자주 묻는 질문</h2>
        <ul>
          <li>운명의 매트릭스는 어떤 원리로 작동하나요?</li>
          <li>분석 결과는 얼마나 정확한가요?</li>
          <li>개인정보는 어떻게 처리되나요?</li>
          <li>결과를 다른 사람과 공유할 수 있나요?</li>
        </ul>
      `;
    default:
      return '';
  }
}

export { handler };
