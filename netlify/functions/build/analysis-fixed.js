"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/analysis-fixed.ts
var analysis_fixed_exports = {};
__export(analysis_fixed_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(analysis_fixed_exports);
var analysesMap = /* @__PURE__ */ new Map();
var handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Content-Type": "application/json"
  };
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: ""
    };
  }
  try {
    if (event.httpMethod !== "GET") {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: "\uC798\uBABB\uB41C HTTP \uBA54\uC18C\uB4DC\uC785\uB2C8\uB2E4." })
      };
    }
    const id = parseInt(event.path.split("/").pop() || "0");
    if (isNaN(id) || id <= 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 ID\uC785\uB2C8\uB2E4." })
      };
    }
    const analysis = analysesMap.get(id);
    if (!analysis) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: "\uBD84\uC11D \uACB0\uACFC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." })
      };
    }
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ...analysis,
        matrixPoints: JSON.parse(analysis.matrixPoints)
      })
    };
  } catch (error) {
    console.error("Get analysis error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "\uBD84\uC11D \uC870\uD68C \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4." })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
