#!/bin/bash

# Netlify CI/CD 빌드 스크립트
echo "===== Netlify CI/CD 빌드 스크립트 시작 ====="

# 1. 필수 종속성 설치 확인
echo "필수 종속성 설치 중..."
npm install vite @vitejs/plugin-react react@18.3.1 react-dom@18.3.1 @babel/preset-react @babel/plugin-transform-react-jsx cssnano terser esbuild --save-dev

# 2. React 종속성 확인
echo "React 패키지 확인 중..."
npm install react@18.3.1 react-dom@18.3.1 --save

# 3. CSS 파일 설정
echo "CSS 파일 설정 중..."
mkdir -p client/src/styles
cp client/src/index.css client/src/styles/global.css

# 4. 환경 설정 확인
echo "환경 설정 확인 중..."
NODE_ENV=production
VITE_BASE_URL="/"

# 5. 매니페스트 파일 확인
echo "매니페스트 파일 확인 중..."
if [ -f "public/manifest.json.new" ]; then
  cp public/manifest.json.new public/manifest.json
fi

# 6. Vite 설치 경로 확인
echo "Vite 설치 확인 중..."
if [ ! -f "node_modules/.bin/vite" ]; then
  echo "Vite 명령어가 없습니다. 전역 설치 시도..."
  npm install -g vite
fi

echo "===== Netlify CI/CD 빌드 스크립트 완료 ====="
