// 가장 단순한 형태의 테스트 함수
exports.handler = async function(event, context) {
  // CORS 헤더
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };
  
  // 디버깅 정보
  console.log("테스트 함수 호출됨");
  console.log("HTTP 메소드:", event.httpMethod);
  console.log("페이로드:", event.body);
  
  // OPTIONS 요청에 대한 응답
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: ""
    };
  }
  
  // 모든 요청에 대해 성공 응답
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      message: "테스트 함수가 성공적으로 실행되었습니다.",
      timestamp: new Date().toISOString(),
      receivedMethod: event.httpMethod,
      receivedPath: event.path
    })
  };
};
