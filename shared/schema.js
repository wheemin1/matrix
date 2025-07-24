"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coupleAnalysisSchema = exports.personalAnalysisSchema = exports.insertMatrixAnalysisSchema = exports.matrixAnalyses = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
const zod_1 = require("zod");
exports.matrixAnalyses = (0, pg_core_1.pgTable)("matrix_analyses", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    mode: (0, pg_core_1.text)("mode").notNull(), // 'personal' or 'couple'
    personalName: (0, pg_core_1.text)("personal_name"),
    personalBirthdate: (0, pg_core_1.text)("personal_birthdate"),
    personalGender: (0, pg_core_1.text)("personal_gender"), // 'male' or 'female'
    person1Name: (0, pg_core_1.text)("person1_name"),
    person1Birthdate: (0, pg_core_1.text)("person1_birthdate"),
    person1Gender: (0, pg_core_1.text)("person1_gender"), // 'male' or 'female'
    person2Name: (0, pg_core_1.text)("person2_name"),
    person2Birthdate: (0, pg_core_1.text)("person2_birthdate"),
    person2Gender: (0, pg_core_1.text)("person2_gender"), // 'male' or 'female'
    matrixPoints: (0, pg_core_1.text)("matrix_points").notNull(), // JSON string
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
});
exports.insertMatrixAnalysisSchema = (0, drizzle_zod_1.createInsertSchema)(exports.matrixAnalyses).omit({
    id: true,
    createdAt: true,
}).extend({
    personalName: zod_1.z.string().nullable(),
    personalBirthdate: zod_1.z.string().nullable(),
    personalGender: zod_1.z.string().nullable(),
    person1Name: zod_1.z.string().nullable(),
    person1Birthdate: zod_1.z.string().nullable(),
    person1Gender: zod_1.z.string().nullable(),
    person2Name: zod_1.z.string().nullable(),
    person2Birthdate: zod_1.z.string().nullable(),
    person2Gender: zod_1.z.string().nullable(),
});
exports.personalAnalysisSchema = zod_1.z.object({
    mode: zod_1.z.literal("personal"),
    personalName: zod_1.z.string()
        .min(1, "이름을 입력해주세요")
        .max(30, "이름이 너무 깁니다")
        .regex(/^[가-힣a-zA-Z\s]+$/, "이름은 한글, 영문, 공백만 포함할 수 있습니다"),
    personalBirthdate: zod_1.z.string()
        .min(1, "생년월일을 입력해주세요")
        .refine((date) => {
        const birthDate = new Date(date);
        const now = new Date();
        return !isNaN(birthDate.getTime()) &&
            birthDate <= now &&
            birthDate.getFullYear() >= 1900;
    }, { message: "유효한 생년월일을 입력해주세요 (1900년 이후)" }),
    personalGender: zod_1.z.enum(["male", "female"], { required_error: "성별을 선택해주세요" }),
});
exports.coupleAnalysisSchema = zod_1.z.object({
    mode: zod_1.z.literal("couple"),
    person1Name: zod_1.z.string()
        .min(1, "첫 번째 사람의 이름을 입력해주세요")
        .max(30, "이름이 너무 깁니다")
        .regex(/^[가-힣a-zA-Z\s]+$/, "이름은 한글, 영문, 공백만 포함할 수 있습니다"),
    person1Birthdate: zod_1.z.string()
        .min(1, "첫 번째 사람의 생년월일을 입력해주세요")
        .refine((date) => {
        const birthDate = new Date(date);
        const now = new Date();
        return !isNaN(birthDate.getTime()) &&
            birthDate <= now &&
            birthDate.getFullYear() >= 1900;
    }, { message: "유효한 생년월일을 입력해주세요 (1900년 이후)" }),
    person1Gender: zod_1.z.enum(["male", "female"], { required_error: "첫 번째 사람의 성별을 선택해주세요" }),
    person2Name: zod_1.z.string()
        .min(1, "두 번째 사람의 이름을 입력해주세요")
        .max(30, "이름이 너무 깁니다")
        .regex(/^[가-힣a-zA-Z\s]+$/, "이름은 한글, 영문, 공백만 포함할 수 있습니다"),
    person2Birthdate: zod_1.z.string()
        .min(1, "두 번째 사람의 생년월일을 입력해주세요")
        .refine((date) => {
        const birthDate = new Date(date);
        const now = new Date();
        return !isNaN(birthDate.getTime()) &&
            birthDate <= now &&
            birthDate.getFullYear() >= 1900;
    }, { message: "유효한 생년월일을 입력해주세요 (1900년 이후)" }),
    person2Gender: zod_1.z.enum(["male", "female"], { required_error: "두 번째 사람의 성별을 선택해주세요" }),
});
