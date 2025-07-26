import type { Handler } from '@netlify/functions';
import { z } from 'zod';

// Standalone schema definition
const personalAnalysisSchema = z.object({
  mode: z.literal("personal"),
  personalName: z.string()
    .min(1, "이름을 입력해주세요")
    .max(30, "이름이 너무 깁니다")
    .regex(/^[  } catch (error) {
    console.error('Error processing analyze request:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: '분석 처리 중 오류가 발생했습니다.',
        details: error instanceof Error ? {
          message: error.message,
          stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined
        } : 'Unknown error'
      })
    };
  }Z\s]+$/, "이름은 한글, 영문, 공백만 포함할 수 있습니다"),
  personalBirthdate: z.string()
    .min(1, "생년월일을 입력해주세요")
    .refine(
      (date) => {
        const birthDate = new Date(date);
        const now = new Date();
        return !isNaN(birthDate.getTime()) && 
               birthDate <= now && 
               birthDate.getFullYear() >= 1900;
      },
      { message: "유효한 생년월일을 입력해주세요 (1900년 이후)" }
    ),
  personalGender: z.enum(["male", "female"], { required_error: "성별을 선택해주세요" }),
});

const coupleAnalysisSchema = z.object({
  mode: z.literal("couple"),
  person1Name: z.string()
    .min(1, "첫 번째 사람의 이름을 입력해주세요")
    .max(30, "이름이 너무 깁니다")
    .regex(/^[가-힣a-zA-Z\s]+$/, "이름은 한글, 영문, 공백만 포함할 수 있습니다"),
  person1Birthdate: z.string()
    .min(1, "첫 번째 사람의 생년월일을 입력해주세요")
    .refine(
      (date) => {
        const birthDate = new Date(date);
        const now = new Date();
        return !isNaN(birthDate.getTime()) && 
               birthDate <= now && 
               birthDate.getFullYear() >= 1900;
      },
      { message: "유효한 생년월일을 입력해주세요 (1900년 이후)" }
    ),
  person1Gender: z.enum(["male", "female"], { required_error: "첫 번째 사람의 성별을 선택해주세요" }),
  person2Name: z.string()
    .min(1, "두 번째 사람의 이름을 입력해주세요")
    .max(30, "이름이 너무 깁니다")
    .regex(/^[가-힣a-zA-Z\s]+$/, "이름은 한글, 영문, 공백만 포함할 수 있습니다"),
  person2Birthdate: z.string()
    .min(1, "두 번째 사람의 생년월일을 입력해주세요")
    .refine(
      (date) => {
        const birthDate = new Date(date);
        const now = new Date();
        return !isNaN(birthDate.getTime()) && 
               birthDate <= now && 
               birthDate.getFullYear() >= 1900;
      },
      { message: "유효한 생년월일을 입력해주세요 (1900년 이후)" }
    ),
  person2Gender: z.enum(["male", "female"], { required_error: "두 번째 사람의 성별을 선택해주세요" }),
});

// Standalone destiny matrix calculation function
function calculateDestinyMatrix(birthdate: string, gender?: string) {
  const date = new Date(birthdate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  // Convert to single digits or major arcana numbers (1-22)
  const reduceToTarot = (num: number): number => {
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

export const handler: Handler = async (event, context) => {
  // 디버깅을 위한 로그 추가
  console.log(`Request received: Method=${event.httpMethod}, Path=${event.path}, Headers=${JSON.stringify(event.headers)}`);
  
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

  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: '잘못된 HTTP 메소드입니다.' })
      };
    }

    // 요청 바디 파싱
    let body;
    try {
      body = JSON.parse(event.body || '{}');
      console.log('Request body parsed:', JSON.stringify(body, null, 2));
    } catch (error) {
      console.error('Error parsing request body:', error);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: '잘못된 요청 데이터 형식입니다.', 
          details: error instanceof Error ? error.message : 'Unknown parsing error' 
        })
      };
    }
    
    const { mode } = body;
    
    if (mode === "personal") {
      const validation = personalAnalysisSchema.safeParse(body);
      if (!validation.success) {
        console.error('Validation error:', JSON.stringify(validation.error.errors, null, 2));
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ 
            error: '입력 데이터 검증에 실패했습니다.', 
            details: validation.error.errors 
          })
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
      const validation = coupleAnalysisSchema.safeParse(body);
      if (!validation.success) {
        console.error('Validation error for couple mode:', JSON.stringify(validation.error.errors, null, 2));
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ 
            error: '입력 데이터 검증에 실패했습니다.', 
            details: validation.error.errors 
          })
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
      body: JSON.stringify({ 
        error: "분석 중 오류가 발생했습니다.",
        details: error instanceof Error ? error.message : String(error)
      })
    };
  }
};
