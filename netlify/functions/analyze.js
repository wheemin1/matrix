// 가장 단순한 형태의 분석 함수 (JavaScript 버전)
exports.handler = async function(event, context) {
  // CORS 헤더
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };
  
  // 디버깅 정보
  console.log("함수 호출됨:", new Date().toISOString());
  console.log("HTTP 메소드:", event.httpMethod);
  console.log("요청 페이로드:", event.body);
  
  // OPTIONS 요청에 대한 응답
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: ""
    };
  }
  
  // 요청 데이터 파싱
  let requestData = {};
  if (event.body) {
    try {
      requestData = JSON.parse(event.body);
      console.log("데이터 파싱 성공:", requestData);
    } catch (error) {
      console.error("데이터 파싱 실패:", error);
    }
  }
  
  // 매트릭스 포인트 생성 - 고정 값으로 대체
  const matrixPoints = {
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
  };
  
  // 성공 응답
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      success: true,
      id: 1,
      mode: requestData.mode || "personal",
      name: requestData.personalName || "User",
      birthdate: requestData.personalBirthdate || "2000-01-01",
      matrixPoints,
      timestamp: new Date().toISOString()
    })
  };
};
