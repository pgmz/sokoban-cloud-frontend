var blockSpriteRoutes = [
    'assets/PNG/Default size/Blocks/block_01.png',
    'assets/PNG/Default size/Blocks/block_02.png',
    'assets/PNG/Default size/Blocks/block_03.png',
    'assets/PNG/Default size/Blocks/block_04.png',
    'assets/PNG/Default size/Blocks/block_05.png',
    'assets/PNG/Default size/Blocks/block_06.png',
    'assets/PNG/Default size/Blocks/block_07.png',
    'assets/PNG/Default size/Blocks/block_08.png'
];

var playerSpriteFront = [
    'assets/PNG/Default size/Player/player_05.png',
    'assets/PNG/Default size/Player/player_06.png',
    'assets/PNG/Default size/Player/player_07.png'
];

var playerSpriteBack = [
    'assets/PNG/Default size/Player/player_08.png',
    'assets/PNG/Default size/Player/player_09.png',
    'assets/PNG/Default size/Player/player_10.png'
];

var playerSpriteRight = [
    'assets/PNG/Default size/Player/player_17.png',
    'assets/PNG/Default size/Player/player_18.png',
    'assets/PNG/Default size/Player/player_19.png'
];

var playerSpriteLeft = [
    'assets/PNG/Default size/Player/player_20.png',
    'assets/PNG/Default size/Player/player_21.png',
    'assets/PNG/Default size/Player/player_22.png'
];

function getBlockSprites(){
    return blockSpriteRoutes.map(function(x){
        return loadImage(x);
    });
}

function getPlayerSprites(){
    var playerSprite = {}
    playerSprite['Front'] = playerSpriteFront.map(function(x){
        return loadImage(x);
    });
    playerSprite['Back'] = playerSpriteBack.map(function(x){
        return loadImage(x);
    });
    playerSprite['Left'] = playerSpriteLeft.map(function(x){
        return loadImage(x);
    });
    playerSprite['Right'] = playerSpriteRight.map(function(x){
        return loadImage(x);
    });
    return playerSprite;
}