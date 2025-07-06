# Reset to the last known good commit and restore the app
# Save this as restore-app.bat in the main directory

@echo off
echo This script will reset the repository to the last known good commit
echo WARNING: This will discard any uncommitted changes!
echo.

set /p CONFIRM=Are you sure you want to proceed? (y/n): 
if /i "%CONFIRM%" neq "y" (
    echo Operation cancelled.
    exit /b
)

echo.
echo ===== Checking git status =====
git status

echo.
echo ===== Backing up current code (just in case) =====
mkdir backup-current-code 2>nul
copy client\src\hooks\use-matrix-positioning.tsx backup-current-code\ 2>nul
copy client\src\components\matrix-visualization.tsx backup-current-code\ 2>nul
echo Backup created in backup-current-code directory

echo.
echo ===== Fetching the latest code from remote =====
git fetch origin

echo.
echo ===== Listing recent commits =====
git log --oneline -n 10

echo.
set /p COMMIT_ID=Enter the commit ID to reset to (or press Enter to cancel): 
if "%COMMIT_ID%"=="" (
    echo Operation cancelled.
    exit /b
)

echo.
echo ===== Resetting to commit %COMMIT_ID% =====
git reset --hard %COMMIT_ID%

echo.
echo ===== Installing dependencies =====
npm install

echo.
echo ===== Starting development server =====
echo You can now start the development server with:
echo npm run dev
echo.
echo Restore complete! The app should now be back to its previous working state.
