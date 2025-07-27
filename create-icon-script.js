// 더 멋진 아이콘 생성하기
const fs = require('fs');
const { createCanvas } = require('canvas');

// 색상 및 설정
const background = '#2A1A5E'; // 보라색 테마
const highlight = '#FFD700';  // 금색 강조

function createIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // 배경
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, size, size);

  // 원 그리기
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.4;
  
  // 바깥 원
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = highlight;
  ctx.lineWidth = size * 0.03;
  ctx.stroke();

  // 내부 패턴 - 운명의 매트릭스 상징
  // 십자 패턴
  const crossSize = radius * 0.7;
  ctx.strokeStyle = highlight;
  ctx.lineWidth = size * 0.02;
  
  // 수직선
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - crossSize);
  ctx.lineTo(centerX, centerY + crossSize);
  ctx.stroke();
  
  // 수평선
  ctx.beginPath();
  ctx.moveTo(centerX - crossSize, centerY);
  ctx.lineTo(centerX + crossSize, centerY);
  ctx.stroke();

  // 대각선 1
  ctx.beginPath();
  ctx.moveTo(centerX - crossSize * 0.7, centerY - crossSize * 0.7);
  ctx.lineTo(centerX + crossSize * 0.7, centerY + crossSize * 0.7);
  ctx.stroke();
  
  // 대각선 2
  ctx.beginPath();
  ctx.moveTo(centerX + crossSize * 0.7, centerY - crossSize * 0.7);
  ctx.lineTo(centerX - crossSize * 0.7, centerY + crossSize * 0.7);
  ctx.stroke();

  // 중앙 원
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 0.3, 0, 2 * Math.PI);
  ctx.fillStyle = highlight;
  ctx.fill();

  // PNG로 저장
  return canvas.toBuffer('image/png');
}

// 아이콘 생성 및 저장
try {
  const icon192 = createIcon(192);
  const icon512 = createIcon(512);
  
  fs.writeFileSync('public/icon-192.png', icon192);
  fs.writeFileSync('public/icon-512.png', icon512);
  
  console.log('아이콘이 성공적으로 생성되었습니다.');
} catch (err) {
  console.error('아이콘 생성 중 오류 발생:', err);
}
