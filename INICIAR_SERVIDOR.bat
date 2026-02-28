@echo off
echo ========================================
echo   BARTEXCRAFT - SERVIDOR LOCAL
echo ========================================
echo.
echo Iniciando servidor web local...
echo.
echo Seu site estara disponivel em:
echo http://localhost:8000
echo.
echo Pressione Ctrl+C para parar o servidor
echo.
echo ========================================
echo.

cd /d "%~dp0"
python -m http.server 8000

pause
