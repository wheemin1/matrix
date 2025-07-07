@echo off
chcp 65001 > nul
echo ===== Netlify 빌드 환경 최적화 중... =====

REM 1. cssnano가 제대로 설치되었는지 확인
if not exist "node_modules\cssnano" (
  echo cssnano 모듈 설치 중...
  npm install cssnano --save-dev
)

REM 2. terser 설치 확인
if not exist "node_modules\terser" (
  echo terser 모듈 설치 중...
  npm install terser --save-dev
)

REM 3. index.css를 global.css로 복사하여 빌드 에러 해결
echo CSS 파일 설정 중...
if not exist "client\src\styles" mkdir "client\src\styles"
copy "client\src\index.css" "client\src\styles\global.css"

REM 완료 메시지
echo ===== Netlify 빌드 환경 최적화 완료 =====
