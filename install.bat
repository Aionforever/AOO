@echo off
title App setup installation

where node >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed. Please install it from https://nodejs.org/
    pause
    exit /b
)

echo Node.js is installed!
echo.

echo Installing dependencies...
call npm install
IF %ERRORLEVEL% NEQ 0 (
    echo Error installing dependencies.
    pause
    exit /b
)
echo Dependencies installed successfully!
echo.

set /p GAME_PATH="Enter the Game path (e.g., C:/Euroaion): "
set /p PLAYER_NAME="Enter your character username: "

echo { > config.json
echo     "gamePath": "%GAME_PATH%", >> config.json
echo     "playerName": "%PLAYER_NAME%", >> config.json
echo     "PORT": 8080 >> config.json
echo } >> config.json

echo Configuration saved to config.json!
echo.

echo Patching Game ! 
set PATCH_FILE=public\class\client_strings_override.xml
set DESTINATION=%GAME_PATH%/L10N/2_eng/data/Strings
copy "%PATCH_FILE%" "%DESTINATION%"


echo @echo off > start.bat
echo node app.js >> start.bat
echo pause >> start.bat

echo Launching the application...
node app.js
pause

