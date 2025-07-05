@echo off
echo Converting SVG icons to PNG...

echo.
echo Checking if Inkscape is installed...
where /q inkscape
if %ERRORLEVEL% NEQ 0 (
    echo Inkscape not found. Please install Inkscape or use an online converter to convert SVG to PNG.
    echo You can download Inkscape from: https://inkscape.org/release/
    echo.
    echo Alternatively, you can use an online service or the provided image converter in:
    echo - /public/image-converter.html
    echo.
    echo The existing PNG files will remain unchanged.
) else (
    echo Inkscape found. Using it to convert SVG to PNG...
    
    inkscape --export-filename=public/icon-192.png -w 192 -h 192 public/icon-simple.svg
    echo Created icon-192.png
    
    inkscape --export-filename=public/icon-512.png -w 512 -h 512 public/icon-simple.svg
    echo Created icon-512.png
    
    echo.
    echo PNG icons have been successfully updated based on the SVG source.
)

echo.
echo Note: For web deployment, make sure to upload these files to your server.
echo.
