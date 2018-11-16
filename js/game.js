const Http = new XMLHttpRequest();
const lambdaUrl = 'https://lq8bqagr7d.execute-api.us-east-1.amazonaws.com/latest';
var blockSprite;
var playerSprite;
var structureOfBoard = {};

$(function(){

    //load initial drawing
    Http.open("GET", lambdaUrl + "/start");
    Http.send();

    Http.onreadystatechange=(e)=>{
        structureOfBoard = JSON.parse(Http.responseText);
        redraw();
    }
    

});

function preload(){
    blockSprite = getBlockSprites();
    playerSprite = getPlayerSprites();
}

function setup() {
    var cnv = createCanvas(640, 448);
    cnv.parent('canvasContainer');

}

function draw() {
    background('#C0C0C0');
    if(structureOfBoard != null){
        structureOfBoard.Boxes.forEach(element => {
            image(blockSprite[element.Sprite],
                element.PositionX * 64,
                element.PositionY * 64);
        });
        
        image(playerSprite[structureOfBoard.Player.Sprite][0],
            structureOfBoard.Player.PositionX * 64, 
            structureOfBoard.Player.PositionY * 64);
    }
}

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    
    if (key == 38) { //up
    }else if (key == 40) { //down
    }else if (key == 39) { //right
    }else if (key == 37) { //left
    }    
}