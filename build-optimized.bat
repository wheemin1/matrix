@echo off
chcp 65001 > nul
echo === 성능 최적화된 빌드 생성 ===
echo.

REM 이전 빌드 삭제
echo 이전 빌드 삭제 중...
if exist "dist" rmdir /s /q "dist"

REM Netlify 빌드 환경 최적화
echo Netlify 빌드 환경 최적화 중...
call netlify-build-fix.bat

REM 환경 변수 설정
echo 환경 변수 설정 중...
set VITE_ANALYZER=true
set NODE_ENV=production
set MINIFY=terser
set SPLIT_CHUNKS=true

REM 클라이언트 빌드
echo 클라이언트 성능 최적화 빌드 중...
npx vite build --minify=terser

REM 서버리스 함수 빌드
echo 서버리스 함수 빌드 중...
npx tsc -p netlify/functions/tsconfig.json

echo.
echo 빌드 완료! 성능 최적화된 빌드가 생성되었습니다.
echo.
