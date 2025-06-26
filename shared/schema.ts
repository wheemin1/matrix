import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const matrixAnalyses = pgTable("matrix_analyses", {
  id: serial("id").primaryKey(),
  mode: text("mode").notNull(), // 'personal' or 'couple'
  personalName: text("personal_name"),
  personalBirthdate: text("personal_birthdate"),
  personalGender: text("personal_gender"), // 'male' or 'female'
  person1Name: text("person1_name"),
  person1Birthdate: text("person1_birthdate"),
  person1Gender: text("person1_gender"), // 'male' or 'female'
  person2Name: text("person2_name"),
  person2Birthdate: text("person2_birthdate"),
  person2Gender: text("person2_gender"), // 'male' or 'female'
  matrixPoints: text("matrix_points").notNull(), // JSON string
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertMatrixAnalysisSchema = createInsertSchema(matrixAnalyses).omit({
  id: true,
  createdAt: true,
}).extend({
  personalName: z.string().nullable(),
  personalBirthdate: z.string().nullable(),
  personalGender: z.string().nullable(),
  person1Name: z.string().nullable(),
  person1Birthdate: z.string().nullable(),
  person1Gender: z.string().nullable(),
  person2Name: z.string().nullable(),
  person2Birthdate: z.string().nullable(),
  person2Gender: z.string().nullable(),
});

export type InsertMatrixAnalysis = z.infer<typeof insertMatrixAnalysisSchema>;
export type MatrixAnalysis = typeof matrixAnalyses.$inferSelect;

export const personalAnalysisSchema = z.object({
  mode: z.literal("personal"),
  personalName: z.string().min(1, "이름을 입력해주세요"),
  personalBirthdate: z.string().min(1, "생년월일을 입력해주세요"),
  personalGender: z.enum(["male", "female"], { required_error: "성별을 선택해주세요" }),
});

export const coupleAnalysisSchema = z.object({
  mode: z.literal("couple"),
  person1Name: z.string().min(1, "첫 번째 사람의 이름을 입력해주세요"),
  person1Birthdate: z.string().min(1, "첫 번째 사람의 생년월일을 입력해주세요"),
  person1Gender: z.enum(["male", "female"], { required_error: "첫 번째 사람의 성별을 선택해주세요" }),
  person2Name: z.string().min(1, "두 번째 사람의 이름을 입력해주세요"),
  person2Birthdate: z.string().min(1, "두 번째 사람의 생년월일을 입력해주세요"),
  person2Gender: z.enum(["male", "female"], { required_error: "두 번째 사람의 성별을 선택해주세요" }),
});

export type PersonalAnalysisRequest = z.infer<typeof personalAnalysisSchema>;
export type CoupleAnalysisRequest = z.infer<typeof coupleAnalysisSchema>;
