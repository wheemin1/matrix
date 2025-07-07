@echo off
chcp 65001 > nul
echo ===== React 디버깅 빌드 스크립트 =====

REM 1. 모든 React 관련 패키지 재설치
echo React 패키지 재설치 중...
call npm remove react react-dom
call npm install react@18.3.1 react-dom@18.3.1 --save

REM 2. 필수 Babel 플러그인 설치
echo Babel 플러그인 설치 중...
call npm install @babel/preset-react @babel/plugin-transform-react-jsx --save-dev

REM 3. manifest.json 업데이트
echo manifest.json 업데이트 중...
copy public\manifest.json.new public\manifest.json /Y

REM 4. 디버깅용 빌드 실행
echo 디버깅용 빌드 실행 중...
call npm run build:client

REM 5. 결과 보고
echo.
echo === 빌드 결과 ===
echo 1. dist 폴더에 빌드된 파일이 생성되었습니다.
echo 2. React 에러를 디버깅하기 위해 minify를 비활성화했습니다.
echo 3. 브라우저에서 직접 테스트: npm run dev
echo.

echo ===== 디버깅 빌드 완료 =====
