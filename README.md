<div align='center'>
    <img src="./public/assets/giphy.gif" alt="cat doing work" width="200px">
    <h1 align='center'>AOO ( Aion OBS Overlay)</h1>
</div>
<h4 align='center'>A lightweight program that show your skills in realtime on stream 💻<br>helping players learn your rotation. 🚀</h4>

<div align="center">

![Twitch Status](https://img.shields.io/twitch/status/ouaiperdu)

</div>


<div align='center'>
    <a href="#features">Features</a>•
    <a href="#getting-started">Getting started</a>•
    <a href="#troubleshooting">Troubleshooting</a>•
    <a href="#contact">Contact</a>
</div>

## Features📝

<h3 align="center">Real time display 🕑
    <img src="public/assets/showcase.gif" alt="AOO Showcase" align="center">
</h3>

* Real-time display
* Seamless integration with OBS
* Fully customizable via CSS
* Lightweight and compatible with all computers
* Works with all classes (there may be bugs with the healer class ).
* Free and Open source ~~( pls help me, i suck at coding 🙃)~~

## Getting Started🔥
### Requirements 
* ⚠️The latest version of [Node js](https://nodejs.org/en/download/current). **Download and install it before continuing**.
* [OBS](https://obsproject.com/) or any streaming software that supports browser integration.
* A Text editor like Visual Studio or NotePad ( Window's default text editor also works.)
* Only works on Windows 10&11 ( maybe 7 or 8 )
### Installation
[Download](https://github.com/Aionforever/Aion-OBS-Overlay/releases/tag/Aoo) and extract the .zip
> Run the `install.bat` file 

if everything has worked properly, you should have a window that opens and asks for the path to your game and your ingame username.
**(Please respect capitalization)**

```

> Enter the Chat.log path (e.g., C:/Euroaion/Chat.log): 
> Enter your character username: 

```
Once you have pressed the “Enter” key, you should find yourself on this page. 

![Final terminal](/public/assets/terminal.png)

<h3 align="center">⚠️Do not close this window while ⚠️<br>you use the program</h3>

If you go back on your folder you should have 2 new files:
- `start.bat` : use it to start your application.
- `config.json` : change the game path and the character you're currently playing.

<br>

> ***NOTE*** <br>If you regularly switch accounts or characters, you need to edit the `config.json`, update it with the name of the character you are playing, and then restart the application.

## Setup OBS
Open [OBS](https://obsproject.com/) -> Add Browser

in the `URL` input add :
```
http://localhost:8080/
```
![OBS Settings](/public/assets/OBS.png)
You can customize at your need with the `custom CSS` tab.

> Click on `Refresh cache of current page` if you don't see any changes.

## Troubleshooting ⚠️

## Contact 🐈
Don't (jk)