@echo off
echo Fixing more UI component imports...

cd c:\web\DestinyMatrixAnalyzer

powershell -Command "(Get-Content client\src\components\ui\carousel.tsx) -replace 'from \"@/components/ui/button\"', 'from \"./button\"' | Set-Content client\src\components\ui\carousel.tsx"
powershell -Command "(Get-Content client\src\components\ui\command.tsx) -replace 'from \"@/components/ui/dialog\"', 'from \"./dialog\"' | Set-Content client\src\components\ui\command.tsx"
powershell -Command "(Get-Content client\src\components\ui\pagination.tsx) -replace 'from \"@/components/ui/button\"', 'from \"./button\"' | Set-Content client\src\components\ui\pagination.tsx"
powershell -Command "(Get-Content client\src\components\ui\toggle-group.tsx) -replace 'from \"@/components/ui/toggle\"', 'from \"./toggle\"' | Set-Content client\src\components\ui\toggle-group.tsx"

rem Fix sidebar.tsx imports
powershell -Command "(Get-Content client\src\components\ui\sidebar.tsx) -replace 'from \"@/hooks/use-mobile\"', 'from \"../../hooks/use-mobile\"' | Set-Content client\src\components\ui\sidebar.tsx"
powershell -Command "(Get-Content client\src\components\ui\sidebar.tsx) -replace 'from \"@/components/ui/button\"', 'from \"./button\"' | Set-Content client\src\components\ui\sidebar.tsx"
powershell -Command "(Get-Content client\src\components\ui\sidebar.tsx) -replace 'from \"@/components/ui/input\"', 'from \"./input\"' | Set-Content client\src\components\ui\sidebar.tsx"
powershell -Command "(Get-Content client\src\components\ui\sidebar.tsx) -replace 'from \"@/components/ui/separator\"', 'from \"./separator\"' | Set-Content client\src\components\ui\sidebar.tsx"
powershell -Command "(Get-Content client\src\components\ui\sidebar.tsx) -replace 'from \"@/components/ui/sheet\"', 'from \"./sheet\"' | Set-Content client\src\components\ui\sidebar.tsx"
powershell -Command "(Get-Content client\src\components\ui\sidebar.tsx) -replace 'from \"@/components/ui/skeleton\"', 'from \"./skeleton\"' | Set-Content client\src\components\ui\sidebar.tsx"
powershell -Command "(Get-Content client\src\components\ui\sidebar.tsx) -replace 'from \"@/components/ui/tooltip\"', 'from \"./tooltip\"' | Set-Content client\src\components\ui\sidebar.tsx"

echo Done fixing more UI component imports.
