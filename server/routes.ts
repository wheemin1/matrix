import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { personalAnalysisSchema, coupleAnalysisSchema } from "@shared/schema";
import { calculateDestinyMatrix } from "../client/src/lib/destiny-matrix";

export async function registerRoutes(app: Express): Promise<Server> {
  // Calculate destiny matrix
  app.post("/api/analyze", async (req, res) => {
    try {
      const { mode } = req.body;
      
      if (mode === "personal") {
        const validation = personalAnalysisSchema.safeParse(req.body);
        if (!validation.success) {
          return res.status(400).json({ error: validation.error.errors });
        }
        
        const { personalName, personalBirthdate, personalGender } = validation.data;
        const matrixPoints = calculateDestinyMatrix(personalBirthdate, personalGender);
        
        const analysis = await storage.createMatrixAnalysis({
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
        
        res.json({ 
          id: analysis.id, 
          matrixPoints,
          name: personalName,
          birthdate: personalBirthdate,
          mode: "personal"
        });
        
      } else if (mode === "couple") {
        const validation = coupleAnalysisSchema.safeParse(req.body);
        if (!validation.success) {
          return res.status(400).json({ error: validation.error.errors });
        }
        
        const { person1Name, person1Birthdate, person1Gender, person2Name, person2Birthdate, person2Gender } = validation.data;
        const person1Matrix = calculateDestinyMatrix(person1Birthdate, person1Gender);
        const person2Matrix = calculateDestinyMatrix(person2Birthdate, person2Gender);
        
        const matrixPoints = {
          person1: person1Matrix,
          person2: person2Matrix,
        };
        
        const analysis = await storage.createMatrixAnalysis({
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
        
        res.json({ 
          id: analysis.id, 
          matrixPoints,
          person1: { name: person1Name, birthdate: person1Birthdate },
          person2: { name: person2Name, birthdate: person2Birthdate },
          mode: "couple"
        });
      } else {
        return res.status(400).json({ error: "Invalid mode" });
      }
    } catch (error) {
      console.error("Analysis error:", error);
      res.status(500).json({ error: "분석 중 오류가 발생했습니다." });
    }
  });

  // Get analysis by ID
  app.get("/api/analysis/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const analysis = await storage.getMatrixAnalysis(id);
      
      if (!analysis) {
        return res.status(404).json({ error: "Analysis not found" });
      }
      
      res.json({
        ...analysis,
        matrixPoints: JSON.parse(analysis.matrixPoints),
      });
    } catch (error) {
      console.error("Get analysis error:", error);
      res.status(500).json({ error: "분석 조회 중 오류가 발생했습니다." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
