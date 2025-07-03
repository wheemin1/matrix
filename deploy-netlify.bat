@echo off
echo Deploying to Netlify...
echo.
echo 1. Building client...
npm run build:client
echo.
echo 2. Building functions...
npm run build:functions
echo.
echo 3. Deploy to Netlify...
echo Please install Netlify CLI if not already installed:
echo npm install -g netlify-cli
echo.
echo Then run: netlify deploy
echo.
echo For production deployment, use: netlify deploy --prod
echo.
