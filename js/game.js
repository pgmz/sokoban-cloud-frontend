const Http = new XMLHttpRequest();
var blockSprite;
var playerSprite;
var environmentSprite;
var crateSprite;
var groundSprite;
var structureOfBoard = {};
var inx = 0;
var offsetX = 0;
var offsetY = 0;
var level;

var Sokoban = window.Sokoban || {};
Sokoban.map = Sokoban.map || {};
var authToken;

$(function(){

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
            $(document.getElementById("level-title")).text(level);
            $(document.getElementById('movements-title')).text("Movements: " + JSON.parse(Http.responseText).Movements);
            loop();
        }

    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = 'signin.html';
    });
});

function preload(){
    noLoop();
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
    background(80);
}

function draw() {
    if(structureOfBoard != null){
        for(var posx = 0; posx < structureOfBoard.Size[0]; posx++){
            for(var posy = 0; posy < structureOfBoard.Size[1]; posy++){
                image(groundSprite[0],
                    (offsetX + posx) * 64,
                    (offsetY + posy) * 64);
            }
        }

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
        
        image(playerSprite[structureOfBoard.Player.Sprite][0],
            (offsetX + structureOfBoard.Player.PositionX) * 64, 
            (offsetY + structureOfBoard.Player.PositionY) * 64);
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
            if(Game){
                gameWon(structureOfBoard.Movement, JSON.parse(Http.responseText).Movements);
            }
        }
    }
}

function gameWon(bestMovements, actualMovements){
    var points = 50 - (actualMovements - bestMovements)*5;
    //store in leaderboard
    $(document.getElementById("points-msg")).text("Your score: " + points);
    document.getElementById("restart-button").disabled = true;
    document.getElementById("options-button").disabled = true;
    document.getElementById("menu-button").disabled = true;
    Http.open("POST", window._config.api.invokeBoardUrl + "/clear");
    Http.setRequestHeader('Authorization', authToken);
    Http.send();
    Http.onreadystatechange=(e)=>{
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