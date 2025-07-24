import { z } from "zod";

export const personalAnalysisSchema = z.object({
  mode: z.literal("personal"),
  personalName: z.string()
    .min(1, "이름을 입력해주세요")
    .max(30, "이름이 너무 깁니다")
    .regex(/^[가-힣a-zA-Z\s]+$/, "이름은 한글, 영문, 공백만 포함할 수 있습니다"),
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

export const coupleAnalysisSchema = z.object({
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

export type PersonalAnalysisRequest = z.infer<typeof personalAnalysisSchema>;
export type CoupleAnalysisRequest = z.infer<typeof coupleAnalysisSchema>;

export type AnalysisResult = {
  id: number;
  matrixPoints: {
    [key: string]: number;
  };
  name: string;
  birthdate: string;
  mode: 'personal' | 'couple';
};
