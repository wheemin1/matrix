const fs = require('fs');
const { createCanvas } = require('canvas');

// 192x192 아이콘 생성
const canvas192 = createCanvas(192, 192);
const ctx192 = canvas192.getContext('2d');

// 배경 색상 설정
ctx192.fillStyle = '#2A1A5E'; // 프로젝트의 테마 색상
ctx192.fillRect(0, 0, 192, 192);

// 텍스트 추가
ctx192.fillStyle = 'white';
ctx192.font = 'bold 96px Arial';
ctx192.textAlign = 'center';
ctx192.textBaseline = 'middle';
ctx192.fillText('D', 96, 96);

// 512x512 아이콘 생성
const canvas512 = createCanvas(512, 512);
const ctx512 = canvas512.getContext('2d');

// 배경 색상 설정
ctx512.fillStyle = '#2A1A5E';
ctx512.fillRect(0, 0, 512, 512);

// 텍스트 추가
ctx512.fillStyle = 'white';
ctx512.font = 'bold 240px Arial';
ctx512.textAlign = 'center';
ctx512.textBaseline = 'middle';
ctx512.fillText('D', 256, 256);

// PNG 파일로 저장
const buffer192 = canvas192.toBuffer('image/png');
const buffer512 = canvas512.toBuffer('image/png');

fs.writeFileSync('public/icon-192.png', buffer192);
fs.writeFileSync('public/icon-512.png', buffer512);

console.log('아이콘 파일이 생성되었습니다.');
