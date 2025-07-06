@echo off
echo 운명 매트릭스 분석기 개발 서버 시작 중...
echo.

REM 서버와 클라이언트를 동시에 실행
start cmd /k "cd /d %~dp0 && set NODE_ENV=development && npx tsx server/index.ts"
echo 서버가 시작되었습니다...
timeout /t 5
start cmd /k "cd /d %~dp0 && set NODE_ENV=development && npx vite"
echo 클라이언트가 시작되었습니다...
echo.
echo 서버: http://localhost:3000
echo 클라이언트: http://localhost:5173
echo.
echo 개발 서버가 모두 실행되었습니다. 브라우저에서 http://localhost:5173 을 열어 앱을 확인하세요.
