@echo off
echo ===== Fixing robots.txt Issue =====

echo Step 1: Building project...
call npm run build

echo Step 2: Verifying robots.txt exists in dist folder...
if not exist "dist\robots.txt" (
  echo robots.txt not found in dist folder, copying manually...
  copy /Y "public\robots.txt" "dist\robots.txt"
)

echo Step 3: Deploying to Netlify...
call netlify deploy --prod

echo ===== Deployment Complete =====
echo Please check your site for the robots.txt file at https://destiny33.site/robots.txt
