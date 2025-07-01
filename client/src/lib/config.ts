// 환경에 따른 API URL 설정
export const API_BASE_URL = import.meta.env.PROD 
  ? '/.netlify/functions' 
  : '/api';

export const endpoints = {
  analyze: `${API_BASE_URL}/analyze`,
  analysis: (id: number) => `${API_BASE_URL}/analysis/${id}`
};
