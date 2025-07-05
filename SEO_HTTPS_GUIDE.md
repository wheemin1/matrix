# Google Search Console 색인 갱신 안내

Google 검색결과에서 HTTP 버전이 남아있는 문제를 해결하기 위한 안내 문서입니다.

## 수정된 내용
1. sitemap.xml의 모든 URL을 https://destiny33.site로 통일했습니다.
2. index.html의 JSON-LD 구조화 데이터 URL을 모두 https://destiny33.site로 변경했습니다.
3. robots.txt 파일을 더 상세하게 보완하여 검색 엔진 크롤러에 대한 규칙을 명확히 했습니다.
4. netlify.toml에 다음의 리다이렉트 규칙을 추가했습니다:
   - HTTP → HTTPS 리다이렉트
   - www → non-www 리다이렉트
   - destiny33.netlify.app → destiny33.site 리다이렉트

## Google Search Console 색인 갱신 요청 방법
1. Google Search Console에 로그인합니다: https://search.google.com/search-console
2. 좌측 메뉴에서 "URL 검사"를 선택합니다.
3. 다음 URL들을 차례로 검사하고 색인 요청합니다:
   - https://destiny33.site/
   - https://destiny33.site/personal
   - https://destiny33.site/couple
   - https://destiny33.site/tarot-cards
4. 또한 "색인 > 사이트맵"에서 sitemap.xml을 다시 제출하세요.

## 주의 사항
- Google이 색인을 완전히 갱신하는 데 며칠에서 몇 주가 걸릴 수 있습니다.
- 외부 사이트에서 http://destiny33.site를 링크하고 있다면 가능한 경우 https로 수정을 요청하세요.
- DNS TTL 설정에 따라 DNS 변경사항이 전파되는 데 최대 48시간이 소요될 수 있습니다.

## 추가 검증 작업
1. SSL Labs에서 SSL/TLS 설정 검증: https://www.ssllabs.com/ssltest/analyze.html?d=destiny33.site
2. Security Headers 검사: https://securityheaders.com/?q=https%3A%2F%2Fdestiny33.site
3. Lighthouse를 통한 종합적인 성능 및 SEO 검사
