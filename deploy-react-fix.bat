@echo off
chcp 65001 > nul
echo ===== 최종 수정 배포 스크립트 =====

REM 1. 매니페스트 파일 최종 확인
echo 매니페스트 파일 확인 중...
copy public\manifest.json.new public\manifest.json /Y

REM 2. 현재 변경사항 커밋
echo 변경사항 커밋 중...
git add .
git commit -m "fix: React useState undefined 및 manifest 오류 수정"

REM 3. Netlify 배포
echo Netlify에 배포 중...
call npm run deploy:verify

echo.
echo === 배포 후 확인사항 ===
echo 1. 브라우저에서 사이트에 접속하여 React가 정상 작동하는지 확인
echo 2. 개발자 도구에서 manifest.json 오류가 해결되었는지 확인
echo 3. useState 관련 오류가 더 이상 표시되지 않는지 확인
echo.

echo 변경사항을 Netlify에 푸시하시겠습니까? (Y/N)
set /p push_choice=선택: 

if /i "%push_choice%"=="Y" (
  git push
  echo 변경사항을 푸시했습니다. Netlify에서 자동 배포가 시작됩니다.
) else (
  echo 푸시를 건너뛰었습니다. 나중에 git push 명령으로 변경사항을 푸시하세요.
)

echo ===== 배포 프로세스 완료 =====
