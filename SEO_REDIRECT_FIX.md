# SEO 리다이렉션 문제 해결 가이드

## 문제 개요

Google Search Console에서 "리다이렉션 포함된 페이지" 오류가 발생하는 문제를 해결하기 위한 가이드입니다. SPA(Single Page Application) 웹사이트에서 검색 엔진이 내부 경로(/personal, /couple 등)를 크롤링할 때 리다이렉션으로 인식하는 문제를 해결합니다.

## 수정된 파일

1. **netlify/functions/dynamic-render.ts**
   - 검색 엔진 봇을 감지하고 경로별 최적화된 HTML 콘텐츠 제공
   - 리다이렉션 대신 실제 컨텐츠 렌더링으로 변경

2. **netlify/functions/snapshot-generator.ts**
   - 각 경로별 정적 HTML 스냅샷 생성 기능 강화
   - 검색 엔진에 최적화된 경로별 메타데이터 제공

3. **netlify.toml**
   - 검색 엔진 봇을 위한 리다이렉션 규칙 최적화
   - `_escaped_fragment_` 지원 추가
   - 도메인 일관성 유지를 위한 리다이렉션 규칙 업데이트

4. **client/index.html**
   - AJAX 크롤링 지원을 위한 메타데이터 추가
   - 경로 구조화 데이터(BreadcrumbList) 추가

5. **public/sitemap.xml**
   - 모든 URL이 일관되게 destiny33.site 도메인 사용하도록 수정

## 테스트 방법

1. `deploy-seo-redirect-fix.bat` 스크립트를 실행하여 변경사항 배포
2. Google Search Console에서 URL 검사를 통해 문제 해결 확인
3. `site:destiny33.site` 검색으로 인덱싱된 페이지 확인
4. 각 내부 경로(personal, couple 등)의 인덱싱 상태 확인

## 작동 원리

1. **검색 엔진 봇 감지**:
   - User-Agent 헤더를 통해 검색 엔진 봇 식별
   - 특별한 처리 적용

2. **경로별 최적화**:
   - 각 경로(/personal, /couple 등)에 맞는 메타데이터 제공
   - 리다이렉션 없는 정적 HTML 제공

3. **AJAX 크롤링 지원**:
   - `_escaped_fragment_` 매개변수를 통한 AJAX 크롤링 지원
   - HTML 스냅샷 생성 및 제공

4. **경로별 SEO 컨텐츠**:
   - 각 경로에 맞는 SEO 친화적인 HTML 컨텐츠 추가
   - 검색 엔진 이해를 돕는 구조화 데이터 제공

## 참고 자료

- [Google의 페이지 리다이렉트 관련 문서](https://support.google.com/webmasters/answer/7440203#page_with_redirect)
- [SPA의 SEO 최적화 가이드](https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics)
- [Netlify의 SPA 라우팅 및 SEO](https://www.netlify.com/blog/2020/04/07/creating-better-more-predictable-redirect-rules-for-spas/)
