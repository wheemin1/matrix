# Netlify 빌드 문제 해결 가이드

## 발생한 문제

1. **cssnano 모듈 오류**: `Cannot find module 'cssnano'` 오류 발생
2. **global.css 파일 누락**: 빌드 과정에서 `/src/styles/global.css` 파일을 찾을 수 없음

## 해결 방법

### 자동 해결 스크립트

프로젝트 루트에 다음 스크립트가 추가되었습니다:

- `netlify-build-fix.sh`: Netlify 환경에서 실행되는 빌드 전 스크립트
- `netlify-build-fix.bat`: 윈도우 환경에서 로컬 테스트용 스크립트

이 스크립트들은 다음 작업을 수행합니다:

1. cssnano 모듈이 설치되지 않은 경우 설치
2. `client/src/index.css`를 `client/src/styles/global.css`로 복사하여 빌드 오류 해결

### 수정된 설정 파일

다음 파일들이 업데이트되었습니다:

1. **netlify.toml**: 빌드 명령에 `netlify-build-fix.sh` 스크립트 추가
2. **package.json**: `prebuild` 및 `prepare-netlify` 스크립트 추가
3. **build-optimized.bat**: 빌드 전 `netlify-build-fix.bat` 실행 추가

### 로컬 테스트 방법

빌드 전 다음 명령을 실행하여 필요한 설정을 적용합니다:

```bash
# Windows에서
.\netlify-build-fix.bat

# Linux/Mac에서
bash netlify-build-fix.sh
```

### 새로운 배포 스크립트

- `deploy-build-fix.bat`: 빌드 오류를 해결하고 최적화된 버전을 배포하는 스크립트

## 향후 유지관리

1. 프로젝트 구조 변경 시 `netlify-build-fix.sh` 및 `netlify-build-fix.bat` 스크립트를 업데이트합니다.
2. CSS 파일 구조 변경 시 스크립트의 경로도 함께 업데이트합니다.

## 추가 개선 사항

- 프로젝트 구조를 정리하여 `/src/styles/global.css`가 실제로 존재하도록 설정하는 것도 좋은 방법입니다.
- 장기적으로는 CSS 관리 방식을 통합하여 이러한 문제가 발생하지 않도록 합니다.
