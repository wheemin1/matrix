// Properly restored analyze.js with real matrix calculation logic

// Standalone destiny matrix calculation function
function calculateDestinyMatrix(birthdate, gender) {
  const date = new Date(birthdate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  // Convert to single digits or major arcana numbers (1-22)
  const reduceToTarot = (num) => {
    while (num > 22) {
      num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num === 0 ? 22 : num;
  };

  // Core energy calculation (center point)
  const coreEnergy = reduceToTarot(day + month + year);
  
  // Spiritual purpose (top point)
  const spiritualPurpose = reduceToTarot(day + month);
  
  // Behavior pattern (left point)
  const behavior = reduceToTarot(day);
  
  // Talent (right point)
  const talent = reduceToTarot(month + year);
  
  // Karma (bottom point)
  const karma = reduceToTarot(year);
  
  // Additional inner points
  const additional1 = reduceToTarot(coreEnergy + spiritualPurpose);
  const additional2 = reduceToTarot(coreEnergy + talent);
  const additional3 = reduceToTarot(coreEnergy + karma);
  const additional4 = reduceToTarot(coreEnergy + behavior);
  
  // Outer ring points
  const outer1 = reduceToTarot(spiritualPurpose + behavior);
  const outer2 = reduceToTarot(spiritualPurpose + talent);
  const outer3 = reduceToTarot(talent + karma);
  const outer4 = reduceToTarot(karma + behavior);

  return {
    coreEnergy,
    spiritualPurpose,
    behavior,
    talent,
    karma,
    additional1,
    additional2,
    additional3,
    additional4,
    outer1,
    outer2,
    outer3,
    outer4,
  };
}

// A map-based storage that persists for the duration of the function container lifetime
let analysesMap = new Map();
let currentId = 1;

// Simple validation helper function
function validatePersonalData(data) {
  const errors = [];
  
  if (!data.personalName || data.personalName.trim() === '') {
    errors.push("이름을 입력해주세요");
  } else if (data.personalName.length > 30) {
    errors.push("이름이 너무 깁니다");
  } else if (!/^[가-힣a-zA-Z\s]+$/.test(data.personalName)) {
    errors.push("이름은 한글, 영문, 공백만 포함할 수 있습니다");
  }
  
  if (!data.personalBirthdate) {
    errors.push("생년월일을 입력해주세요");
  } else {
    const birthDate = new Date(data.personalBirthdate);
    const now = new Date();
    if (isNaN(birthDate.getTime()) || birthDate > now || birthDate.getFullYear() < 1900) {
      errors.push("유효한 생년월일을 입력해주세요 (1900년 이후)");
    }
  }
  
  if (!data.personalGender || !['male', 'female'].includes(data.personalGender)) {
    errors.push("성별을 선택해주세요");
  }
  
  return { valid: errors.length === 0, errors };
}

// Simple validation helper function for couple data
function validateCoupleData(data) {
  const errors = [];
  
  // Person 1 validation
  if (!data.person1Name || data.person1Name.trim() === '') {
    errors.push("첫 번째 사람의 이름을 입력해주세요");
  } else if (data.person1Name.length > 30) {
    errors.push("첫 번째 사람의 이름이 너무 깁니다");
  } else if (!/^[가-힣a-zA-Z\s]+$/.test(data.person1Name)) {
    errors.push("이름은 한글, 영문, 공백만 포함할 수 있습니다");
  }
  
  if (!data.person1Birthdate) {
    errors.push("첫 번째 사람의 생년월일을 입력해주세요");
  } else {
    const birthDate = new Date(data.person1Birthdate);
    const now = new Date();
    if (isNaN(birthDate.getTime()) || birthDate > now || birthDate.getFullYear() < 1900) {
      errors.push("유효한 생년월일을 입력해주세요 (1900년 이후)");
    }
  }
  
  if (!data.person1Gender || !['male', 'female'].includes(data.person1Gender)) {
    errors.push("첫 번째 사람의 성별을 선택해주세요");
  }
  
  // Person 2 validation
  if (!data.person2Name || data.person2Name.trim() === '') {
    errors.push("두 번째 사람의 이름을 입력해주세요");
  } else if (data.person2Name.length > 30) {
    errors.push("두 번째 사람의 이름이 너무 깁니다");
  } else if (!/^[가-힣a-zA-Z\s]+$/.test(data.person2Name)) {
    errors.push("이름은 한글, 영문, 공백만 포함할 수 있습니다");
  }
  
  if (!data.person2Birthdate) {
    errors.push("두 번째 사람의 생년월일을 입력해주세요");
  } else {
    const birthDate = new Date(data.person2Birthdate);
    const now = new Date();
    if (isNaN(birthDate.getTime()) || birthDate > now || birthDate.getFullYear() < 1900) {
      errors.push("유효한 생년월일을 입력해주세요 (1900년 이후)");
    }
  }
  
  if (!data.person2Gender || !['male', 'female'].includes(data.person2Gender)) {
    errors.push("두 번째 사람의 성별을 선택해주세요");
  }
  
  return { valid: errors.length === 0, errors };
}

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
  
  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: '잘못된 HTTP 메소드입니다.' })
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
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: "잘못된 데이터 형식입니다." })
        };
      }
    }
    
    const { mode } = requestData;
    
    if (mode === "personal") {
      // 개인 분석 모드
      const validation = validatePersonalData(requestData);
      if (!validation.valid) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: validation.errors })
        };
      }
      
      const { personalName, personalBirthdate, personalGender } = requestData;
      const matrixPoints = calculateDestinyMatrix(personalBirthdate, personalGender);
      
      // 분석 기록 생성
      const id = currentId++;
      const analysis = {
        id,
        mode: "personal",
        personalName,
        personalBirthdate,
        personalGender,
        person1Name: null,
        person1Birthdate: null,
        person1Gender: null,
        person2Name: null,
        person2Birthdate: null,
        person2Gender: null,
        matrixPoints: JSON.stringify(matrixPoints),
        createdAt: new Date()
      };
      
      analysesMap.set(id, analysis);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          id, 
          matrixPoints,
          name: personalName,
          birthdate: personalBirthdate,
          mode: "personal",
          success: true
        })
      };
      
    } else if (mode === "couple") {
      // 커플 분석 모드
      const validation = validateCoupleData(requestData);
      if (!validation.valid) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: validation.errors })
        };
      }
      
      const { person1Name, person1Birthdate, person1Gender, person2Name, person2Birthdate, person2Gender } = requestData;
      const person1Matrix = calculateDestinyMatrix(person1Birthdate, person1Gender);
      const person2Matrix = calculateDestinyMatrix(person2Birthdate, person2Gender);
      
      const matrixPoints = {
        person1: person1Matrix,
        person2: person2Matrix,
      };
      
      // 분석 기록 생성
      const id = currentId++;
      const analysis = {
        id,
        mode: "couple",
        personalName: null,
        personalBirthdate: null,
        personalGender: null,
        person1Name,
        person1Birthdate,
        person1Gender,
        person2Name,
        person2Birthdate,
        person2Gender,
        matrixPoints: JSON.stringify(matrixPoints),
        createdAt: new Date()
      };
      
      analysesMap.set(id, analysis);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          id, 
          matrixPoints,
          person1: { name: person1Name, birthdate: person1Birthdate },
          person2: { name: person2Name, birthdate: person2Birthdate },
          mode: "couple",
          success: true
        })
      };
    } else {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "잘못된 모드입니다." })
      };
    }
  } catch (error) {
    console.error("분석 오류:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: "분석 중 오류가 발생했습니다.", 
        message: error instanceof Error ? error.message : 'Unknown error',
        success: false
      })
    };
  }
};
