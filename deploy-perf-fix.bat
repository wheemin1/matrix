@echo off
echo === 성능 최적화 및 OG 이미지 수정사항 배포 ===
echo.

REM Git에 변경사항 추가
echo Git에 변경사항 추가 중...
git add client/index.html
git add netlify.toml
git add vite.config.ts
git add postcss.config.js
git add build-optimized.bat

REM 커밋 생성
echo 커밋 생성 중...
git commit -m "성능 최적화 및 OG 이미지 메타태그 개선"

REM GitHub에 푸시
echo GitHub에 푸시 중...
git push

REM 최적화된 빌드 생성
echo.
echo 최적화된 빌드를 생성하시겠습니까? (Y/N)
set /p build_choice=선택: 

if /i "%build_choice%"=="Y" (
  echo.
  echo 최적화된 빌드 생성 중...
  call build-optimized.bat
)

echo.
echo 완료! 모든 변경사항이 GitHub에 푸시되었습니다.
echo Netlify 배포가 자동으로 시작됩니다.
echo.
echo 배포 후 OG 이미지 및 메타태그 테스트:
echo https://destiny33.site/verify-og-tags.html
echo.

pause
