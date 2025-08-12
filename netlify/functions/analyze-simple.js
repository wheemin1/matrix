// 간단한 JavaScript 버전 - CommonJS 사용
exports.handler = async (event, context) => {
  // CORS 헤더 설정
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
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

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: '잘못된 HTTP 메소드입니다.' })
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    
    // 임시 응답 - 실제 분석 로직은 나중에 추가
    const mockResult = {
      id: Date.now(),
      matrixPoints: {
        center: 1,
        heart: 2,
        base: 3,
        left: 4,
        right: 5,
        sex: 6,
        family: 7,
        health: 8,
        logic: 9,
        work: 10,
        heaven: 11,
        earth: 12
      },
      mode: body.mode || 'personal'
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(mockResult)
    };

  } catch (error) {
    console.error('분석 중 오류 발생:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: '서버 내부 오류가 발생했습니다.' })
    };
  }
};
