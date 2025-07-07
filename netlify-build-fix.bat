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

REM 3. React 관련 Babel 플러그인 설치
if not exist "node_modules\@babel\plugin-transform-react-jsx" (
  echo React Babel 플러그인 설치 중...
  npm install @babel/plugin-transform-react-jsx --save-dev
)

REM 4. esbuild 확인 (Vite 빌드 최적화)
if not exist "node_modules\esbuild" (
  echo esbuild 모듈 설치 중...
  npm install esbuild --save-dev
)

REM 5. React 코어 모듈 설치 확인
if not exist "node_modules\react" (
  echo React 코어 모듈 재설치 중...
  npm install react react-dom --save
)

REM 6. index.css를 global.css로 복사하여 빌드 에러 해결
echo CSS 파일 설정 중...
if not exist "client\src\styles" mkdir "client\src\styles"
copy "client\src\index.css" "client\src\styles\global.css" /Y

REM 7. 필요한 디렉토리 확인
echo 빌드 디렉토리 확인 중...
if not exist "dist" mkdir "dist"
if not exist "netlify\functions\build" mkdir "netlify\functions\build"

REM 8. 매니페스트 파일 유효성 확인
echo 매니페스트 파일 검증 중...
if exist "public\manifest.json" (
  echo manifest.json 파일이 존재합니다.
) else (
  echo manifest.json 파일이 없습니다. 기본 매니페스트 생성 중...
  copy "public\site.webmanifest" "public\manifest.json" /Y
)

REM 완료 메시지
echo ===== Netlify 빌드 환경 최적화 완료 =====
