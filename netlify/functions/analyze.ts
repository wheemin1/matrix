// @ts-check
import { Handler } from '@netlify/functions';

// 초간단 핸들러 - 단순히 정적 데이터만 반환
export const handler: Handler = async (event, context) => {
  // 상세 로깅
  console.log('==== DEBUG INFO START ====');
  console.log(`Request Method: ${event.httpMethod}`);
  console.log(`Request Path: ${event.path}`);
  console.log(`Request Headers: ${JSON.stringify(event.headers, null, 2)}`);
  console.log(`Request Body: ${event.body}`);
  console.log(`Node Environment: ${process.env.NODE_ENV}`);
  console.log(`Function Name: ${context?.functionName || 'unknown'}`);
  console.log(`Netlify Context: ${process.env.CONTEXT || 'unknown'}`);
  console.log('==== DEBUG INFO END ====');

  // CORS 헤더 설정
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // OPTIONS 요청 처리 (CORS preflight)
  if (event.httpMethod === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  try {
    console.log('Processing request...');
    
    // HTTP 메소드 확인 - POST가 아니더라도 일단 처리 (디버깅 목적)
    console.log(`Handling ${event.httpMethod} request`);
    
    // 요청 바디 파싱 시도
    let requestData = {};
    if (event.body) {
      try {
        requestData = JSON.parse(event.body);
        console.log('Successfully parsed request body:', requestData);
      } catch (parseError) {
        console.error('Failed to parse request body:', parseError);
      }
    }
    
    // 단순 응답 반환
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Static test response',
        requestMethod: event.httpMethod,
        receivedData: requestData,
        timestamp: new Date().toISOString(),
        matrixPoints: {
          coreEnergy: 1,
          spiritualPurpose: 2,
          behavior: 3,
          talent: 4,
          karma: 5
        }
      })
    };
  } catch (error: any) {
    // 상세한 오류 정보 로깅
    console.error('==== ERROR DETAILS ====');
    console.error(`Error Type: ${error?.constructor?.name || 'Unknown'}`);
    console.error(`Error Message: ${error?.message || 'No error message'}`);
    console.error(`Error Stack: ${error?.stack || 'No stack trace'}`);
    console.error('==== ERROR DETAILS END ====');
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: '분석 중 오류가 발생했습니다.', 
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: process.env.NODE_ENV !== 'production' ? (error instanceof Error ? error.stack : null) : null,
        timestamp: new Date().toISOString()
      })
    };
  }
};
