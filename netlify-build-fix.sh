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

# 3. React 관련 Babel 플러그인 설치
if [ ! -d "node_modules/@babel/plugin-transform-react-jsx" ]; then
  echo "React Babel 플러그인 설치 중..."
  npm install @babel/plugin-transform-react-jsx --save-dev
fi

# 4. esbuild 확인 (Vite 빌드 최적화)
if [ ! -d "node_modules/esbuild" ]; then
  echo "esbuild 모듈 설치 중..."
  npm install esbuild --save-dev
fi

# 5. React 코어 모듈 설치 확인
if [ ! -d "node_modules/react" ] || [ ! -d "node_modules/react-dom" ]; then
  echo "React 코어 모듈 재설치 중..."
  npm install react react-dom --save
fi

# 6. index.css를 global.css로 복사하여 빌드 에러 해결
echo "CSS 파일 설정 중..."
mkdir -p client/src/styles
cp client/src/index.css client/src/styles/global.css

# 7. 필요한 디렉토리 확인
echo "빌드 디렉토리 확인 중..."
mkdir -p dist
mkdir -p netlify/functions/build

# 8. 매니페스트 파일 유효성 확인
echo "매니페스트 파일 검증 중..."
if [ -f "public/manifest.json" ]; then
  echo "manifest.json 파일이 존재합니다."
else
  echo "manifest.json 파일이 없습니다. 기본 매니페스트 생성 중..."
  cp public/site.webmanifest public/manifest.json
fi

# 완료 메시지
echo "===== Netlify 빌드 환경 최적화 완료 ====="
