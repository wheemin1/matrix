@echo off
echo === OG 이미지 강제 업데이트 배치 파일 ===
echo.

echo 1. OG 이미지 타임스탬프 업데이트 중...
powershell -Command "(Get-Item public\og-image.png).LastWriteTime = Get-Date"
powershell -Command "(Get-Item public\twitter-image.png).LastWriteTime = Get-Date"
powershell -Command "(Get-Item public\kakao-image.png).LastWriteTime = Get-Date"

echo 2. index.html의 OG 타임스탬프 업데이트 중...
powershell -Command "$content = Get-Content client\index.html -Raw; $content = $content -replace 'og:updated_time\" content=\"[^\"]*\"', ('og:updated_time\" content=\"' + (Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ') + '\"'); $content | Set-Content client\index.html"

echo 3. 변경 사항 Git에 추가 중...
git add client\index.html netlify.toml public\og-image.png public\twitter-image.png public\kakao-image.png

echo 4. 변경 사항 커밋 중...
git commit -m "OG 이미지 및 메타데이터 타임스탬프 강제 업데이트"

echo 5. GitHub에 푸시 중...
git push

echo.
echo 완료! Netlify가 새 버전을 배포하면 캐시된 OG 이미지가 업데이트됩니다.
echo 소셜 미디어 플랫폼에서 캐시를 갱신하려면 refresh-og-cache.bat 파일을 실행하세요.
echo.
pause
