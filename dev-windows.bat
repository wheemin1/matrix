@echo off
set NODE_ENV=development
cd client
start cmd /k npx vite
cd ..
start cmd /k npx tsx server/index.ts
