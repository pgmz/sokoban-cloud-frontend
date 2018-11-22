const Http = new XMLHttpRequest();
var blockSprite;
var playerSprite;
var structureOfBoard = {};
var inx = 0;
var offsetX = 0;
var offsetY = 0;
var level;

var Sokoban = window.Sokoban || {};
Sokoban.map = Sokoban.map || {};
var authToken;

$(function(){

    noLoop();

    Sokoban.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.location.href = 'signin.html';
        }

        Http.open("GET", window._config.api.invokeBoardUrl + "/start");
        Http.setRequestHeader('Authorization',authToken);
        Http.send();
    
        Http.onreadystatechange=(e)=>{
            structureOfBoard = JSON.parse(Http.responseText).Board;
            offsetX = Math.floor(15 - structureOfBoard.Size[0])/2;
            offsetY = Math.floor(9 - structureOfBoard.Size[1])/2;
            level = structureOfBoard.Name;
            $(document.getElementById('movements-title')).text("Movements: " + JSON.parse(Http.responseText).Movements);
            $(document.getElementById('points-title')).text("Points: " + JSON.parse(Http.responseText).Points);
            loop();
        }

    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = 'signin.html';
    });
});

function preload(){
    blockSprite = getBlockSprites();
    playerSprite = getPlayerSprites();
    environmentSprite = getEnvironmentSprites();
    crateSprite = getCrateSprites();
    groundSprite = getGroundSprites();
}

function setup() {
    //this is equal to 15*9
    var cnv = createCanvas(960, 576);
    cnv.parent('canvasContainer');
    frameRate(12);
}

function draw() {
    background('#000000');
    if(structureOfBoard != null){

        structureOfBoard.Limits.forEach(element => {
            image(blockSprite[element.Sprite],
                (offsetX + element.PositionX) * 64,
                (offsetY + element.PositionY) * 64);
        });

        structureOfBoard.Marker.forEach(element => {
            image(environmentSprite[element.Sprite],
                (offsetX + element.PositionX) * 64,
                (offsetY + element.PositionY) * 64);
        });

        structureOfBoard.Boxes.forEach(element => {
            image(blockSprite[element.Sprite],
                (offsetX + element.PositionX) * 64,
                (offsetY + element.PositionY) * 64);
        });
        
        image(playerSprite[structureOfBoard.Player.Sprite][inx],
            (offsetX + structureOfBoard.Player.PositionX) * 64, 
            (offsetY + structureOfBoard.Player.PositionY) * 64);
        inx = (inx==2)?(0):(inx+1);
    }
}

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    var action;
    if (key == 38) { //up
        action = "Up";
    }else if (key == 40) { //down
        action = "Down";
    }else if (key == 39) { //right
        action = "Right";
    }else if (key == 37) { //left
        action = "Left";
    }
    
    if(action != null){
        Http.open("GET", window._config.api.invokeGameUrl + "/move/" + action);
        Http.setRequestHeader('Authorization',authToken);
        Http.send();
    
        Http.onreadystatechange=(e)=>{
            structureOfBoard = JSON.parse(Http.responseText).Board;
            Game = JSON.parse(Http.responseText).Game;
            $(document.getElementById('movements-title')).text("Movements: " + JSON.parse(Http.responseText).Movements);
            $(document.getElementById('points-title')).text("Points: " + JSON.parse(Http.responseText).Points);
            if(Game){
                gameWon();
            }
        }
    }
}

function gameWon(){
    Http.open("POST", window._config.api.invokeBoardUrl + "/clear");
    Http.setRequestHeader('Authorization', authToken);
    Http.send();
    Http.onreadystatechange=(e)=>{
        console.log(Http.responseText);
        noLoop()
        document.getElementById("game-popup-id").style.display = "block";
    }
}

function restartGame(){
    Sokoban.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.location.href = 'signin.html';
        }

        Http.open("GET", window._config.api.invokeBoardUrl + "/start/new/" + level);
        Http.setRequestHeader('Authorization',authToken);
        Http.send();
    
        Http.onreadystatechange=(e)=>{
            window.location.href = "game.html";
        }

    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = 'signin.html';
    });
}