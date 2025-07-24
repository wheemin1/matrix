@echo off
echo ===================================================
echo 운명의 매트릭스 SEO 리다이렉션 문제 해결 스크립트
echo ===================================================

echo [1/4] 빌드 시작...
call npm run build

echo [2/4] 서버리스 함수 빌드...
cd netlify\functions
call npm run build
cd ..\..

echo [3/4] Netlify에 배포 중...
call netlify deploy --prod

echo [4/4] Google Search Console에 sitemap.xml 제출 알림...
echo Google Search Console에서 다음 작업을 수행하세요:
echo 1. https://search.google.com/search-console 접속
echo 2. 사이트맵 섹션으로 이동
echo 3. sitemap.xml 제출
echo 4. "색인 > 페이지" 메뉴에서 URL 검사를 통해 리다이렉션 문제 해결 확인

echo ===================================================
echo 배포 완료! 다음은 SEO 최적화 결과를 확인하는 방법입니다:
echo 1. Google Search Console에서 인덱싱 상태 확인
echo 2. "site:destiny33.site" 검색으로 인덱스된 페이지 확인
echo 3. 각 내부 경로(/personal, /couple 등)의 상태 확인
echo ===================================================

pause
