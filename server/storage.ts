import { matrixAnalyses, type MatrixAnalysis, type InsertMatrixAnalysis } from "@shared/schema";

export interface IStorage {
  createMatrixAnalysis(analysis: InsertMatrixAnalysis): Promise<MatrixAnalysis>;
  getMatrixAnalysis(id: number): Promise<MatrixAnalysis | undefined>;
}

export class MemStorage implements IStorage {
  private analyses: Map<number, MatrixAnalysis>;
  private currentId: number;

  constructor() {
    this.analyses = new Map();
    this.currentId = 1;
  }

  async createMatrixAnalysis(insertAnalysis: InsertMatrixAnalysis): Promise<MatrixAnalysis> {
    const id = this.currentId++;
    const analysis: MatrixAnalysis = {
      ...insertAnalysis,
      id,
      createdAt: new Date(),
    };
    this.analyses.set(id, analysis);
    return analysis;
  }

  async getMatrixAnalysis(id: number): Promise<MatrixAnalysis | undefined> {
    return this.analyses.get(id);
  }
}

export const storage = new MemStorage();
