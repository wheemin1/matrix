// 더 간단한 방법으로 아이콘 생성
const fs = require('fs');

// 아이콘용 SVG 생성 함수
function createIconSVG(size) {
  const background = '#2A1A5E'; // 보라색 테마
  const highlight = '#FFD700';  // 금색 강조
  
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <!-- 배경 -->
    <rect width="${size}" height="${size}" fill="${background}" />
    
    <!-- 바깥 원 -->
    <circle cx="${size/2}" cy="${size/2}" r="${size*0.4}" stroke="${highlight}" stroke-width="${size*0.03}" fill="none" />
    
    <!-- 십자 패턴 -->
    <line x1="${size/2}" y1="${size/2-size*0.28}" x2="${size/2}" y2="${size/2+size*0.28}" stroke="${highlight}" stroke-width="${size*0.02}" />
    <line x1="${size/2-size*0.28}" y1="${size/2}" x2="${size/2+size*0.28}" y2="${size/2}" stroke="${highlight}" stroke-width="${size*0.02}" />
    
    <!-- 대각선 -->
    <line x1="${size/2-size*0.28*0.7}" y1="${size/2-size*0.28*0.7}" x2="${size/2+size*0.28*0.7}" y2="${size/2+size*0.28*0.7}" stroke="${highlight}" stroke-width="${size*0.02}" />
    <line x1="${size/2+size*0.28*0.7}" y1="${size/2-size*0.28*0.7}" x2="${size/2-size*0.28*0.7}" y2="${size/2+size*0.28*0.7}" stroke="${highlight}" stroke-width="${size*0.02}" />
    
    <!-- 중앙 원 -->
    <circle cx="${size/2}" cy="${size/2}" r="${size*0.4*0.3}" fill="${highlight}" />
  </svg>`;
}

// SVG를 PNG로 변환 (Base64 인코딩 사용)
// 이 예제에서는 이미지 파일에 SVG 콘텐츠를 직접 저장합니다.
try {
  const svg192 = createIconSVG(192);
  const svg512 = createIconSVG(512);
  
  fs.writeFileSync('public/icon-192.svg', svg192);
  fs.writeFileSync('public/icon-512.svg', svg512);
  
  console.log('SVG 아이콘이 생성되었습니다.');
} catch (err) {
  console.error('아이콘 생성 중 오류 발생:', err);
}
