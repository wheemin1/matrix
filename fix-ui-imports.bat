@echo off
echo Fixing imports in UI components...

cd c:\web\DestinyMatrixAnalyzer

powershell -Command "(Get-Content client\src\components\ui\accordion.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\accordion.tsx"
powershell -Command "(Get-Content client\src\components\ui\alert-dialog.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\alert-dialog.tsx"
powershell -Command "(Get-Content client\src\components\ui\avatar.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\avatar.tsx"
powershell -Command "(Get-Content client\src\components\ui\badge.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\badge.tsx"
powershell -Command "(Get-Content client\src\components\ui\breadcrumb.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\breadcrumb.tsx"
powershell -Command "(Get-Content client\src\components\ui\calendar.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\calendar.tsx"
powershell -Command "(Get-Content client\src\components\ui\input-otp.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\input-otp.tsx"
powershell -Command "(Get-Content client\src\components\ui\menubar.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\menubar.tsx"
powershell -Command "(Get-Content client\src\components\ui\radio-group.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\radio-group.tsx"
powershell -Command "(Get-Content client\src\components\ui\resizable.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\resizable.tsx"
powershell -Command "(Get-Content client\src\components\ui\scroll-area.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\scroll-area.tsx"
powershell -Command "(Get-Content client\src\components\ui\select.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\select.tsx"
powershell -Command "(Get-Content client\src\components\ui\separator.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\separator.tsx"
powershell -Command "(Get-Content client\src\components\ui\sheet.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\sheet.tsx"
powershell -Command "(Get-Content client\src\components\ui\sidebar.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\sidebar.tsx"
powershell -Command "(Get-Content client\src\components\ui\skeleton.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\skeleton.tsx"
powershell -Command "(Get-Content client\src\components\ui\slider.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\slider.tsx"
powershell -Command "(Get-Content client\src\components\ui\switch.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\switch.tsx"
powershell -Command "(Get-Content client\src\components\ui\table.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\table.tsx"
powershell -Command "(Get-Content client\src\components\ui\tabs.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\tabs.tsx"
powershell -Command "(Get-Content client\src\components\ui\textarea.tsx) -replace 'from \"@/lib/utils\"', 'from \"../../lib/utils\"' | Set-Content client\src\components\ui\textarea.tsx"

echo Done fixing imports.
