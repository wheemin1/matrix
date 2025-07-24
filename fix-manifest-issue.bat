@echo off
echo ===== Fixing Manifest.json Issue =====

echo Step 1: Building project...
call npm run build

echo Step 2: Verifying manifest.json exists in dist folder...
if not exist "dist\manifest.json" (
  echo manifest.json not found in dist folder, copying manually...
  copy /Y "public\manifest.json" "dist\manifest.json"
)

echo Step 3: Deploying to Netlify...
call netlify deploy --prod

echo ===== Deployment Complete =====
echo Please check your site for the manifest.json file
