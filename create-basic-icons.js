const fs = require('fs');

// 1x1 픽셀 테마 색상 PNG 이미지 (Base64)
const base64Image = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

// Base64 디코딩하여 파일로 저장
const imageBuffer = Buffer.from(base64Image, 'base64');

// 임시 아이콘 파일 생성
fs.writeFileSync('public/icon-192.png', imageBuffer);
fs.writeFileSync('public/icon-512.png', imageBuffer);

console.log('기본 아이콘 파일이 생성되었습니다.');
