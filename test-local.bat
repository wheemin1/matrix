@echo off
chcp 65001 > nul
echo ===== React 로컬 테스트 스크립트 =====

REM 1. 빌드된 파일 서비스
echo 빌드된 파일을 로컬에서 테스트합니다...
echo 브라우저에서 http://localhost:8080 에 접속하세요.

REM 2. 간단한 HTTP 서버 실행
cd dist
npx serve -s .
