@echo off
chcp 65001 > nul
echo === Netlify 배포 준비 중 (빌드 오류 해결 버전) ===
echo.

REM 최적화 빌드 수행
echo 최적화 빌드 수행 중...
call netlify-build-fix.bat
call build-optimized.bat

REM Git에 변경사항 추가
echo Git에 변경사항 추가 중...
git add .

REM 커밋 메시지 입력 받기
set /p COMMIT_MSG="커밋 메시지 입력: "
if "%COMMIT_MSG%"=="" set COMMIT_MSG="Fix build issues and deploy optimized version"

REM 커밋 및 푸시
echo 커밋 및 푸시 중...
git commit -m "%COMMIT_MSG%"
git push

echo.
echo === Netlify 배포 완료 ===
echo Netlify가 GitHub 리포지토리 변경사항을 감지하고 자동으로 배포합니다.
echo 배포 상태는 Netlify 대시보드에서 확인할 수 있습니다.
echo.
