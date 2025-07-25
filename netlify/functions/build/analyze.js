"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const schema_1 = require("../../shared/schema");
const destiny_matrix_1 = require("../../client/src/lib/destiny-matrix");
const storage_1 = require("../../server/storage");
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
            const validation = schema_1.personalAnalysisSchema.safeParse(body);
            if (!validation.success) {
                return {
                    statusCode: 400,
                    headers,
                    body: JSON.stringify({ error: validation.error.errors })
                };
            }
            const { personalName, personalBirthdate, personalGender } = validation.data;
            const matrixPoints = (0, destiny_matrix_1.calculateDestinyMatrix)(personalBirthdate, personalGender);
            const analysis = await storage_1.storage.createMatrixAnalysis({
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
            });
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    id: analysis.id,
                    matrixPoints,
                    name: personalName,
                    birthdate: personalBirthdate,
                    mode: "personal"
                })
            };
        }
        else if (mode === "couple") {
            const validation = schema_1.coupleAnalysisSchema.safeParse(body);
            if (!validation.success) {
                return {
                    statusCode: 400,
                    headers,
                    body: JSON.stringify({ error: validation.error.errors })
                };
            }
            const { person1Name, person1Birthdate, person1Gender, person2Name, person2Birthdate, person2Gender } = validation.data;
            const person1Matrix = (0, destiny_matrix_1.calculateDestinyMatrix)(person1Birthdate, person1Gender);
            const person2Matrix = (0, destiny_matrix_1.calculateDestinyMatrix)(person2Birthdate, person2Gender);
            const matrixPoints = {
                person1: person1Matrix,
                person2: person2Matrix,
            };
            const analysis = await storage_1.storage.createMatrixAnalysis({
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
            });
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    id: analysis.id,
                    matrixPoints,
                    person1: { name: person1Name, birthdate: person1Birthdate },
                    person2: { name: person2Name, birthdate: person2Birthdate },
                    mode: "couple"
                })
            };
        }
        else {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: "잘못된 모드입니다." })
            };
        }
    }
    catch (error) {
        console.error("Analysis error:", error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: "분석 중 오류가 발생했습니다." })
        };
    }
};
exports.handler = handler;
