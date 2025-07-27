// 테스트 파일을 dist 폴더로 복사하는 스크립트 (CommonJS 방식)
const fs = require('fs');
const path = require('path');

// 소스 파일 목록
const filesToCopy = [
  {
    src: './public/test-icons.html',
    dest: './dist/test-icons.html'
  },
  {
    src: './public/matrix-bg.svg',
    dest: './dist/matrix-bg.svg'
  }
];

console.log('===== 테스트 파일 복사 시작 =====');

// dist 폴더가 존재하는지 확인
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist', { recursive: true });
  console.log('dist 폴더 생성됨');
}

// 파일 복사
let copiedCount = 0;
filesToCopy.forEach(file => {
  try {
    if (fs.existsSync(file.src)) {
      fs.copyFileSync(file.src, file.dest);
      copiedCount++;
      console.log(`✅ ${file.src} → ${file.dest} 복사 성공`);
    } else {
      console.error(`❌ 오류: ${file.src} 파일이 존재하지 않습니다.`);
    }
  } catch (err) {
    console.error(`❌ ${file.src} 복사 중 오류 발생:`, err.message);
  }
});

console.log(`===== 테스트 파일 복사 완료: ${copiedCount}개 파일 처리됨 =====`);
