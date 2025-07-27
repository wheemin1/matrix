import type { Handler } from '@netlify/functions';

// 매우 간단한 테스트 함수
export const handler: Handler = async (event, context) => {
  // CORS 헤더 설정
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Content-Type': 'application/json'
  };

  // OPTIONS 요청 처리 (CORS preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  // 로깅
  console.log(`Request received: Method=${event.httpMethod}, Path=${event.path}`);
  console.log(`Headers: ${JSON.stringify(event.headers)}`);
  console.log(`Body: ${event.body}`);

  try {
    // 모든 요청에 대해 성공 응답
    const response = {
      success: true,
      message: 'Simplified analyze function response',
      timestamp: new Date().toISOString(),
      httpMethod: event.httpMethod,
      requestBody: event.body ? JSON.parse(event.body) : null
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response)
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: '처리 중 오류가 발생했습니다.', 
        message: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
};
