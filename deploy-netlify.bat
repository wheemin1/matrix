@echo off
chcp 65001 > nul
echo ===== Netlify 배포 스크립트 =====

REM 1. 빌드 환경 준비
echo 빌드 환경 설정 중...
copy public\manifest.json.new public\manifest.json /Y

REM 2. package.json 의존성 확인
echo package.json 업데이트 중...
call npm install

REM 3. 변경사항 커밋
echo 변경사항 커밋 중...
git add .
git commit -m "fix: Netlify 빌드 설정 수정 - vite 의존성 추가"

REM 4. GitHub에 푸시 (자동 Netlify 배포 트리거)
echo GitHub에 변경사항 푸시 중...
git push

echo.
echo 배포가 시작되었습니다. Netlify 대시보드에서 빌드 상태를 확인하세요.
echo https://app.netlify.com/
echo.

echo ===== 배포 프로세스 완료 =====
