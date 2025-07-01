const { Handler } = require('@netlify/functions');

// Standalone schema definition (Zod equivalent without dependency)
function validatePersonalAnalysis(data) {
  const { mode, personalName, personalBirthdate, personalGender } = data;
  
  if (mode !== "personal") return { success: false, error: { errors: ["모드가 'personal'이어야 합니다"] } };
  
  if (!personalName || personalName.length < 1 || personalName.length > 30) {
    return { success: false, error: { errors: ["이름을 1~30자 사이로 입력해주세요"] } };
  }
  
  if (!/^[가-힣a-zA-Z\s]+$/.test(personalName)) {
    return { success: false, error: { errors: ["이름은 한글, 영문, 공백만 포함할 수 있습니다"] } };
  }
  
  if (!personalBirthdate) {
    return { success: false, error: { errors: ["생년월일을 입력해주세요"] } };
  }
  
  const birthDate = new Date(personalBirthdate);
  const now = new Date();
  if (isNaN(birthDate.getTime()) || birthDate > now || birthDate.getFullYear() < 1900) {
    return { success: false, error: { errors: ["유효한 생년월일을 입력해주세요 (1900년 이후)"] } };
  }
  
  if (personalGender !== "male" && personalGender !== "female") {
    return { success: false, error: { errors: ["성별을 선택해주세요"] } };
  }
  
  return { success: true, data: { mode, personalName, personalBirthdate, personalGender } };
}

function validateCoupleAnalysis(data) {
  const { mode, person1Name, person1Birthdate, person1Gender, person2Name, person2Birthdate, person2Gender } = data;
  
  if (mode !== "couple") return { success: false, error: { errors: ["모드가 'couple'이어야 합니다"] } };
  
  // 첫 번째 사람 검증
  if (!person1Name || person1Name.length < 1 || person1Name.length > 30) {
    return { success: false, error: { errors: ["첫 번째 사람의 이름을 1~30자 사이로 입력해주세요"] } };
  }
  
  if (!/^[가-힣a-zA-Z\s]+$/.test(person1Name)) {
    return { success: false, error: { errors: ["이름은 한글, 영문, 공백만 포함할 수 있습니다"] } };
  }
  
  if (!person1Birthdate) {
    return { success: false, error: { errors: ["첫 번째 사람의 생년월일을 입력해주세요"] } };
  }
  
  const birthDate1 = new Date(person1Birthdate);
  const now = new Date();
  if (isNaN(birthDate1.getTime()) || birthDate1 > now || birthDate1.getFullYear() < 1900) {
    return { success: false, error: { errors: ["유효한 생년월일을 입력해주세요 (1900년 이후)"] } };
  }
  
  if (person1Gender !== "male" && person1Gender !== "female") {
    return { success: false, error: { errors: ["첫 번째 사람의 성별을 선택해주세요"] } };
  }
  
  // 두 번째 사람 검증
  if (!person2Name || person2Name.length < 1 || person2Name.length > 30) {
    return { success: false, error: { errors: ["두 번째 사람의 이름을 1~30자 사이로 입력해주세요"] } };
  }
  
  if (!/^[가-힣a-zA-Z\s]+$/.test(person2Name)) {
    return { success: false, error: { errors: ["이름은 한글, 영문, 공백만 포함할 수 있습니다"] } };
  }
  
  if (!person2Birthdate) {
    return { success: false, error: { errors: ["두 번째 사람의 생년월일을 입력해주세요"] } };
  }
  
  const birthDate2 = new Date(person2Birthdate);
  if (isNaN(birthDate2.getTime()) || birthDate2 > now || birthDate2.getFullYear() < 1900) {
    return { success: false, error: { errors: ["유효한 생년월일을 입력해주세요 (1900년 이후)"] } };
  }
  
  if (person2Gender !== "male" && person2Gender !== "female") {
    return { success: false, error: { errors: ["두 번째 사람의 성별을 선택해주세요"] } };
  }
  
  return { 
    success: true, 
    data: { 
      mode, 
      person1Name, 
      person1Birthdate, 
      person1Gender, 
      person2Name, 
      person2Birthdate, 
      person2Gender 
    } 
  };
}

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

const handler = async (event, context) => {
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
    const { mode } = body;
    
    if (mode === "personal") {
      const validation = validatePersonalAnalysis(body);
      if (!validation.success) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: validation.error.errors })
        };
      }
      
      const { personalName, personalBirthdate, personalGender } = validation.data;
      const matrixPoints = calculateDestinyMatrix(personalBirthdate, personalGender);
      
      // Create analysis record
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
          mode: "personal"
        })
      };
      
    } else if (mode === "couple") {
      const validation = validateCoupleAnalysis(body);
      if (!validation.success) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: validation.error.errors })
        };
      }
      
      const { person1Name, person1Birthdate, person1Gender, person2Name, person2Birthdate, person2Gender } = validation.data;
      const person1Matrix = calculateDestinyMatrix(person1Birthdate, person1Gender);
      const person2Matrix = calculateDestinyMatrix(person2Birthdate, person2Gender);
      
      const matrixPoints = {
        person1: person1Matrix,
        person2: person2Matrix,
      };
      
      // Create analysis record
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
          mode: "couple"
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
    console.error("Analysis error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "분석 중 오류가 발생했습니다." })
    };
  }
};

exports.handler = handler;
