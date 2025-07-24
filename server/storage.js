"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.MemStorage = void 0;
class MemStorage {
    constructor() {
        this.analyses = new Map();
        this.currentId = 1;
    }
    async createMatrixAnalysis(insertAnalysis) {
        const id = this.currentId++;
        const analysis = {
            ...insertAnalysis,
            id,
            createdAt: new Date(),
        };
        this.analyses.set(id, analysis);
        return analysis;
    }
    async getMatrixAnalysis(id) {
        return this.analyses.get(id);
    }
}
exports.MemStorage = MemStorage;
exports.storage = new MemStorage();
