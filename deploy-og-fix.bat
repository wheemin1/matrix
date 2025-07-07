@echo off
echo === OG 이미지 및 메타태그 수정사항 배포 ===
echo.

echo 변경사항 Git에 추가 중...
git add .

echo 변경사항 커밋 중...
git commit -m "Fix OG image and metadata tags for better social media preview"

echo GitHub에 푸시 중...
git push

echo.
echo 배포가 완료되면 OG 캐시 갱신 안내를 확인하세요...
echo.
echo refresh-og-cache.bat 실행 중...
call refresh-og-cache.bat

echo.
echo Netlify 배포 후 https://destiny33.site/verify-og-tags.html 에서 OG 태그를 확인하세요.
echo.
