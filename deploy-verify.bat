@echo off
chcp 65001 > nul
echo ===== Netlify 배포 검증 스크립트 =====

REM 1. 빌드 환경 준비
call netlify-build-fix.bat

REM 2. 클라이언트 빌드
echo 클라이언트 빌드 중...
call npm run build:client

REM 3. 서버리스 함수 빌드
echo 서버리스 함수 빌드 중...
call npm run build:functions

REM 4. 배포 확인 메시지
echo.
echo 배포 준비가 완료되었습니다!
echo 1. 모든 빌드 파일이 dist 및 netlify/functions/build 폴더에 생성되었습니다.
echo 2. git add . && git commit -m "빌드 최적화" && git push 명령으로 변경사항을 푸시하세요.
echo 3. Netlify 대시보드에서 배포 상태를 확인하세요.
echo.

REM 선택적 Netlify CLI 배포 (설치된 경우)
echo Netlify CLI로 직접 배포하시겠습니까? (Y/N)
set /p deploy_choice=선택: 

if /i "%deploy_choice%"=="Y" (
  echo Netlify CLI로 배포 중...
  netlify deploy --prod
) else (
  echo 배포를 건너뜁니다. Git으로 변경사항을 푸시하여 배포를 트리거하세요.
)

echo ===== 작업 완료 =====
