@echo off
echo ===== Copying manifest files to dist folder =====
copy /Y "public\manifest.json" "dist\manifest.json"
copy /Y "public\site.webmanifest" "dist\site.webmanifest"
copy /Y "public\robots.txt" "dist\robots.txt"
echo ===== Manifest files copied successfully =====
