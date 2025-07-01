@echo off
echo 클린 빌드 및 배포 준비 스크립트 실행 중...

REM 기존 빌드 파일 삭제
echo 기존 빌드 파일 삭제 중...
if exist dist rmdir /s /q dist
if exist netlify\functions\build rmdir /s /q netlify\functions\build
if exist .netlify\build-cache rmdir /s /q .netlify\build-cache

REM 기존 노드 모듈 캐시 지우기 (선택 사항)
REM echo 노드 모듈 캐시 삭제 중...
REM if exist node_modules rmdir /s /q node_modules
REM npm install

REM 클라이언트 빌드
echo 클라이언트 빌드 중...
npm run build:client

REM Netlify Functions 빌드
echo Netlify Functions 빌드 중...
mkdir netlify\functions\build
esbuild netlify\functions\analyze-fixed.ts --platform=node --bundle --format=cjs --outfile=netlify\functions\build\analyze-fixed.js
esbuild netlify\functions\analysis-fixed.ts --platform=node --bundle --format=cjs --outfile=netlify\functions\build\analysis-fixed.js

REM 빌드 완료 메시지
echo.
echo 빌드가 완료되었습니다. 이제 Netlify에 배포하세요.
echo 다음 명령어로 배포할 수 있습니다:
echo.
echo npx netlify deploy --prod
echo.
