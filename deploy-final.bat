@echo off
chcp 65001 > nul
echo ===== Netlify 최종 배포 스크립트 =====

REM 1. 빌드 환경 준비
call .\netlify-build-fix.bat

REM 2. 빌드 검증
echo 빌드 테스트 중...
call npm run build:client

REM 3. Git 변경사항 확인 및 커밋
echo.
echo Git 변경사항:
git status

echo.
echo 모든 변경사항을 커밋하시겠습니까? (Y/N)
set /p commit_choice=선택: 

if /i "%commit_choice%"=="Y" (
  echo 커밋 메시지를 입력하세요:
  set /p commit_msg=메시지: 
  
  if "%commit_msg%"=="" (
    set commit_msg=빌드 최적화 및 Netlify 배포 수정
  )
  
  git add .
  git commit -m "%commit_msg%"
  
  echo 변경사항을 푸시하시겠습니까? (Y/N)
  set /p push_choice=선택: 
  
  if /i "%push_choice%"=="Y" (
    git push
    echo 변경사항이 푸시되었습니다. Netlify에서 자동 배포가 시작됩니다.
  ) else (
    echo 푸시를 건너뛰었습니다. 나중에 git push 명령으로 변경사항을 푸시하세요.
  )
) else (
  echo 커밋을 건너뛰었습니다.
)

echo.
echo 배포 후 확인사항:
echo 1. Netlify 대시보드에서 배포 상태 확인
echo 2. 사이트 접속하여 React 관련 오류(useState undefined) 확인
echo 3. 매니페스트 파일 로딩 확인(개발자 도구 콘솔에서 오류 확인)
echo 4. OG 태그 및 SEO 설정 확인(Facebook 공유 디버거 등 활용)
echo.

echo ===== 배포 프로세스 완료 =====
