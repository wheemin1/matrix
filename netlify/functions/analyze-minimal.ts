// @ts-check
import { Handler } from '@netlify/functions';

// 매우 간단한 핸들러
export const handler: Handler = async (event) => {
  // CORS 헤더 설정
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
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

  // 로깅
  console.log(`Request received: Method=${event.httpMethod}, Path=${event.path}`);
  console.log(`Headers: ${JSON.stringify(event.headers)}`);
  console.log(`Body: ${event.body}`);

  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: '잘못된 HTTP 메소드입니다.' })
      };
    }

    // 요청 바디 파싱
    const body = JSON.parse(event.body || '{}');
    const { mode, personalName, personalBirthdate, personalGender } = body;

    // 간단한 매트릭스 포인트 계산
    const date = new Date(personalBirthdate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // 응답 생성
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        id: 1,
        mode: mode || 'personal',
        name: personalName || 'User',
        birthdate: personalBirthdate || '2000-01-01',
        matrixPoints: {
          coreEnergy: 1,
          spiritualPurpose: 2,
          behavior: 3,
          talent: 4, 
          karma: 5,
          additional1: 6,
          additional2: 7,
          additional3: 8,
          additional4: 9,
          outer1: 10,
          outer2: 11,
          outer3: 12,
          outer4: 13
        }
      })
    };
  } catch (error) {
    console.error('Error in analyze function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: '분석 중 오류가 발생했습니다.', 
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: process.env.NODE_ENV !== 'production' ? (error instanceof Error ? error.stack : null) : null
      })
    };
  }
};
