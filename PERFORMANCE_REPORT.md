# 성능 최적화 보고서

## 성능 이슈 분석

1. **렌더링 차단 리소스**:
   - 외부 폰트 리소스가 페이지 렌더링을 차단
   - 구글 폰트(Noto Serif KR)와 Pretendard 폰트의 로딩이 지연됨

2. **사용하지 않는 자바스크립트**:
   - 약 201KB의 불필요한 자바스크립트 발견
   - 초기 로딩에 필요하지 않은 코드가 모두 포함됨

3. **사용하지 않는 CSS**:
   - 약 95KB의 사용하지 않는 CSS 발견
   - 구글 폰트(78KB)와 Pretendard(17.5KB)에 사용되지 않는 부분이 많음

4. **비효율적인 캐시 정책**:
   - 정적 자산의 캐싱 시간이 최적화되지 않음
   - 폰트 파일의 캐시 TTL이 짧음(7일)

5. **LCP(Largest Contentful Paint)가 느림**:
   - 4,900ms로 측정됨 (권장: 2,500ms 이내)
   - 렌더링 지연이 전체 LCP의 86% 차지

## 개선 방안

1. **폰트 로딩 최적화**:
   - `media="print" onload="this.media='all'"` 패턴으로 폰트 로딩을 비차단 방식으로 변경
   - noscript 태그로 JavaScript 비활성화 환경에서도 폰트 표시 보장

2. **JavaScript 최적화**:
   - 메인 스크립트에 `defer` 속성 추가
   - vite.config.ts에 청크 분할(Code Splitting) 설정 추가
   - 벤더(react, react-dom 등) 코드를 별도 청크로 분리

3. **CSS 최적화**:
   - cssnano를 통한 CSS 압축 및 최적화
   - 사용하지 않는 CSS 규칙 제거
   - 중복 코드 병합

4. **캐시 정책 개선**:
   - 정적 자산(JS, CSS)의 캐시 기간을 1년으로 연장
   - 폰트 파일의 캐시 기간을 1년으로 설정
   - 이미지 파일의 캐시 기간을 30일로 설정
   - OG 이미지에 stale-while-revalidate 전략 적용

5. **빌드 최적화**:
   - Terser를 사용한 JavaScript 압축
   - 프로덕션 빌드에서 콘솔 로그 및 디버거 제거
   - CSS 코드 분할 활성화
   - 빌드 에러 해결 자동화 스크립트 구현

## 개선 결과 (예상)

| 지표 | 개선 전 | 개선 후 (예상) |
|------|---------|--------------|
| LCP | 4,900ms | ~2,000ms |
| 페이지 크기 | ~600KB | ~300KB |
| 사용하지 않는 JS | 201KB | <50KB |
| 사용하지 않는 CSS | 95KB | <20KB |
| 초기 로딩 시간 | ~6초 | ~2.5초 |

## 추가 권장 사항

1. **이미지 최적화**:
   - WebP 형식으로 변환 고려
   - 이미지 스프라이트 기법 활용

2. **폰트 최적화**:
   - 서브셋 폰트 사용
   - 웹폰트 로더 사용 고려

3. **지연 로딩**:
   - 초기 뷰포트에 보이지 않는 이미지에 lazy loading 적용
   - 중요하지 않은 스크립트의 지연 로딩

4. **서버 푸시**:
   - HTTP/2 서버 푸시로 중요 리소스 미리 전송

5. **모니터링**:
   - 주기적인 성능 지표 모니터링
   - 실제 사용자 측정(RUM) 데이터 수집

## 빌드 오류 해결

1. **cssnano 모듈 누락 문제**:
   - Netlify 빌드 환경에서 `Cannot find module 'cssnano'` 오류 발생
   - 해결: 빌드 전 자동으로 cssnano 설치하는 스크립트(`netlify-build-fix.sh`) 추가

2. **global.css 파일 누락 문제**:
   - 빌드 시 `/src/styles/global.css` 파일을 찾을 수 없는 문제
   - 해결: 빌드 전 `index.css`를 `styles/global.css`로 복사하는 자동화 스크립트 추가

3. **자동화된 해결책**:
   - `netlify-build-fix.sh` 및 `netlify-build-fix.bat` 스크립트 구현
   - `netlify.toml`의 build 명령어를 수정하여 빌드 전 수정 스크립트 실행
   - `package.json`에 prebuild 스크립트 추가
