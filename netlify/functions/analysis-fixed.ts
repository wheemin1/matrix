import type { Handler } from '@netlify/functions';

// A map-based storage that persists for the duration of the function container lifetime
// This is declared outside the handler to persist across invocations of the same function instance
let analysesMap = new Map();

export const handler: Handler = async (event, context) => {
  // CORS 헤더 설정
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
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

  try {
    if (event.httpMethod !== 'GET') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: '잘못된 HTTP 메소드입니다.' })
      };
    }

    // 요청 ID 파싱
    const id = parseInt(event.path.split('/').pop() || '0');
    
    if (isNaN(id) || id <= 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: '유효하지 않은 ID입니다.' })
      };
    }
    
    const analysis = analysesMap.get(id);
    
    if (!analysis) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: '분석 결과를 찾을 수 없습니다.' })
      };
    }
    
    // 중요: 분석 결과에 저장된 matrixPoints는 JSON 문자열이므로 파싱해서 반환해야 합니다
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ...analysis,
        matrixPoints: JSON.parse(analysis.matrixPoints),
      })
    };
  } catch (error) {
    console.error("Get analysis error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "분석 조회 중 오류가 발생했습니다." })
    };
  }
};
