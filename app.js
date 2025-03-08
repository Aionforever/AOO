const fs = require('fs');
const readline = require('readline');
const { Server } = require("socket.io");
const express = require("express");
const http = require("http");

const configPath = 'config.json'
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

console.clear()
console.log("App started ✅ ( Don't close this window )")
console.log("You can add this URL to OBS 🚀 -> http://localhost:8080/")
console.log("Check the Github page if you have any problem 😎 - You can use the start.bat file to restart the application")

const app = express();
const server = http.createServer(app);
const io_local = new Server(server);

app.use(express.static("public"));

const PORT = config.PORT; // Don't change the port unless it's already in used !
server.listen(PORT);

const filePath = `${config.gamePath}/Chat.log`
const PLAYER_NAME = config.playerName


let lastDisplayedLine = null;
let fileSize = fs.statSync(filePath).size;
let combatTimer;

const regex = /S:([^:]+)/;

function extractActionOnPatchedGame(line) {

    if (line.match(/^.*You inflicted continuous\b/)) return;
    if (line.match(/You gave yourself a defense shield by using Stone Skin/)) return

    const match = line.match(regex);

    if (match) {
        const spellName = match[1].trim();
        return spellName === 'Auto-Atk' ? 'Auto Attack' : spellName;
    }

    const spell_exception_regex = /^.*You .*?\b(?:using|inflicted|granted) ([A-Za-z'’\s]+)(?: [IVXLCDM]+)?\b/;
    const result = line.match(spell_exception_regex)

    return result ? result[1].trim() : null

}

let spells_list = []
function addSpell(spellName) {

    if (!spellName) return

    if (spells_list.length === 0 || spells_list[spells_list.length - 1] !== spellName) {
        spells_list.push(spellName);
        isPlayerOutOfCombat();
    }
}

let lastLength = 0;
function isPlayerOutOfCombat() {
    lastLength = spells_list.length;
    clearInterval(combatTimer)

    combatTimer = setTimeout(() => {
        if (spells_list.length === lastLength) {
            spells_list = [];
        }
    }, 30000);
}

function readNewLines() {
    const stream = fs.createReadStream(filePath, { encoding: 'utf8', start: fileSize });
    const rl = readline.createInterface({ input: stream });

    rl.on('line', (line) => {

        const regex = new RegExp("::P:" + PLAYER_NAME + "")

        if (line.match(/::P:Caster/)) return

        // return spell name 
        if (regex.test(line) && line !== lastDisplayedLine) {

            lastDisplayedLine = line;
            addSpell(extractActionOnPatchedGame(line))

            io_local.send(spells_list[spells_list.length - 1])
        }


    });

    rl.on('close', () => {
        fileSize = fs.statSync(filePath).size;
    });
}

fs.watchFile(filePath, { interval: 500 }, (curr, prev) => {

    if (curr.size > prev.size) {
        readNewLines();

    }
});