@echo off
echo Fixing more imports in UI components...

cd c:\web\DestinyMatrixAnalyzer

powershell -Command "(Get-Content client\src\components\ui\carousel.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\carousel.tsx"
powershell -Command "(Get-Content client\src\components\ui\checkbox.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\checkbox.tsx"
powershell -Command "(Get-Content client\src\components\ui\command.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\command.tsx"
powershell -Command "(Get-Content client\src\components\ui\context-menu.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\context-menu.tsx"
powershell -Command "(Get-Content client\src\components\ui\dialog.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\dialog.tsx"
powershell -Command "(Get-Content client\src\components\ui\drawer.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\drawer.tsx"
powershell -Command "(Get-Content client\src\components\ui\dropdown-menu.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\dropdown-menu.tsx"
powershell -Command "(Get-Content client\src\components\ui\hover-card.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\hover-card.tsx"
powershell -Command "(Get-Content client\src\components\ui\input.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\input.tsx"
powershell -Command "(Get-Content client\src\components\ui\navigation-menu.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\navigation-menu.tsx"
powershell -Command "(Get-Content client\src\components\ui\pagination.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\pagination.tsx"
powershell -Command "(Get-Content client\src\components\ui\progress.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\progress.tsx"
powershell -Command "(Get-Content client\src\components\ui\popover.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\popover.tsx"
powershell -Command "(Get-Content client\src\components\ui\label.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\label.tsx"
powershell -Command "(Get-Content client\src\components\ui\chart.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\chart.tsx"
powershell -Command "(Get-Content client\src\components\ui\toggle.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\toggle.tsx"
powershell -Command "(Get-Content client\src\components\ui\toggle-group.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\toggle-group.tsx"

echo Done fixing more imports.
