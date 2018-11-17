const Http = new XMLHttpRequest();
const lambdaGameUrl = 'https://lq8bqagr7d.execute-api.us-east-1.amazonaws.com/latest';
const lambdaBoardUrl = "https://vls7dvxl8f.execute-api.us-east-1.amazonaws.com/latest";
var blockSprite;
var playerSprite;
var structureOfBoard = {};
var inx = 0;

$(function(){

    noLoop();

    Http.open("GET", lambdaBoardUrl + "/start");
    Http.send();

    Http.onreadystatechange=(e)=>{
        structureOfBoard = JSON.parse(Http.responseText).Board;
        loop();
    }

});

function preload(){
    blockSprite = getBlockSprites();
    playerSprite = getPlayerSprites();
    environmentSprite = getEnvironmentSprites();
    crateSprite = getCrateSprites();
    groundSprite = getGroundSprites();
}

function setup() {
    var cnv = createCanvas(768, 576);
    cnv.parent('canvasContainer');
    frameRate(12);
}

function draw() {
    background('#C0C0C0');
    if(structureOfBoard != null){

        for(var posX = 0; posX < 12; posX++){
            for(var posY = 0; posY < 9; posY++){
                if(posX == 0 || posX == 11 || posY == 0 || posY == 8){
                    image(blockSprite[0],
                        posX * 64,
                        posY * 64);
                } else {
                    image(groundSprite[0],
                        posX * 64,
                        posY * 64);
                }
            }
        }

        structureOfBoard.Marker.forEach(element => {
            image(environmentSprite[element.Sprite],
                (element.PositionX+1) * 64,
                (element.PositionY+1) * 64);
        });

        structureOfBoard.Boxes.forEach(element => {
            image(blockSprite[element.Sprite],
                (element.PositionX+1) * 64,
                (element.PositionY+1) * 64);
        });
        
        image(playerSprite[structureOfBoard.Player.Sprite][inx],
            (structureOfBoard.Player.PositionX+1) * 64, 
            (structureOfBoard.Player.PositionY+1) * 64);
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
        Http.open("GET", lambdaGameUrl + "/move/" + action);
        Http.send();
    
        Http.onreadystatechange=(e)=>{
            structureOfBoard = JSON.parse(Http.responseText).Board;
            Game = JSON.parse(Http.responseText).Game;
            if(Game){
                $(document.getElementById('mainTitle')).text("Ah perro, ya ganaste");
            }
        }
    }
}