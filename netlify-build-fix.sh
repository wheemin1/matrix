#!/bin/bash

# 빌드 전 Netlify 환경 설정
echo "===== Netlify 빌드 환경 최적화 중... ====="

# 1. cssnano가 제대로 설치되었는지 확인
if [ ! -d "node_modules/cssnano" ]; then
  echo "cssnano 모듈 설치 중..."
  npm install cssnano --save-dev
fi

# 2. terser 설치 확인
if [ ! -d "node_modules/terser" ]; then
  echo "terser 모듈 설치 중..."
  npm install terser --save-dev
fi

# 3. index.css를 global.css로 복사하여 빌드 에러 해결
echo "CSS 파일 설정 중..."
mkdir -p client/src/styles
cp client/src/index.css client/src/styles/global.css

# 완료 메시지
echo "===== Netlify 빌드 환경 최적화 완료 ====="
