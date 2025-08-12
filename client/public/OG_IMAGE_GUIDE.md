# OG 이미지 및 소셜 미디어 메타데이터 가이드

이 문서는 Destiny Matrix 웹사이트의 소셜 미디어 미리보기 이미지 및 메타데이터 관리에 대한 가이드입니다.

## 파일 구조

- `og-image.png` - 페이스북, 일반 OG 태그용 이미지 (1200x630px)
- `twitter-image.png` - 트위터용 이미지 (1200x630px)
- `kakao-image.png` - 카카오톡용 이미지 (800x400px)
- `og-simple.svg` - 백업 벡터 이미지

## 캐시 갱신 방법

소셜 미디어 플랫폼은 OG 이미지와 메타데이터를 캐싱합니다. 변경 후 캐시를 갱신하려면:

1. **Facebook**: https://developers.facebook.com/tools/debug/
2. **Twitter**: https://cards-dev.twitter.com/validator
3. **LinkedIn**: https://www.linkedin.com/post-inspector/
4. **KakaoTalk**: https://developers.kakao.com/tool/clear/og
5. **Google**: Google Search Console의 URL 검사 도구 사용

## 검증 도구

OG 태그 검증을 위해 `/verify-og-tags.html`을 사용하세요. 이 페이지에서 현재 설정된 모든 OG 태그와 이미지를 확인할 수 있습니다.

## 주의사항

- 이미지 파일 형식: PNG 또는 JPG를 사용하세요. SVG는 일부 플랫폼에서 지원하지 않습니다.
- 이미지 크기: 페이스북 권장 크기는 1200x630px입니다.
- 캐시 갱신: 변경 후 각 플랫폼의 캐시 갱신이 필요합니다.
- 미리보기 테스트: 배포 전에 항상 verify-og-tags.html에서 미리보기를 확인하세요.
