var commonRoute = 'assets/PNG/Default size/';
var blockSpriteRoutes = [
    commonRoute + 'Blocks/block_01.png', //red2
    commonRoute + 'Blocks/block_02.png', //gray
    commonRoute + 'Blocks/block_03.png', //brown
    commonRoute + 'Blocks/block_04.png', //red tile
    commonRoute + 'Blocks/block_05.png', //red tile2
    commonRoute + 'Blocks/block_06.png', //gray tile
    commonRoute + 'Blocks/block_07.png', //brown tile
    commonRoute + 'Blocks/block_08.png' //red
];

var groundSpritesRoutes = [
    commonRoute + 'Ground/ground_01.png', //dirt
    commonRoute + 'Ground/ground_02.png', //selected grass
    commonRoute + 'Ground/ground_03.png', //selected stone
    commonRoute + 'Ground/ground_04.png', //selected dirt
    commonRoute + 'Ground/ground_05.png', //grass
    commonRoute + 'Ground/ground_06.png' // stone
];

var environmentSpritesRoutes = [
    commonRoute + 'Environment/environment_10.png', //white + green point
    commonRoute + 'Environment/environment_02.png', //white + brown point
    commonRoute + 'Environment/environment_01.png', //dark + brown point
    commonRoute + 'Environment/environment_03.png', //selected light gray
    commonRoute + 'Environment/environment_04.png', //dark + red point
    commonRoute + 'Environment/environment_05.png', //white + red point
    commonRoute + 'Environment/environment_06.png', //selected dark gray
    commonRoute + 'Environment/environment_07.png', //dark + blue point
    commonRoute + 'Environment/environment_08.png', //white + blue point
    commonRoute + 'Environment/environment_09.png', //dark + green point
    commonRoute + 'Environment/environment_11.png', //coin
    commonRoute + 'Environment/environment_12.png', //coin2
    commonRoute + 'Environment/environment_13.png', //dark + gray point
    commonRoute + 'Environment/environment_14.png', //white + gray point
    commonRoute + 'Environment/environment_15.png', //drak gray block
    commonRoute + 'Environment/environment_16.png' // selected white
]

var crateSpritesRoutes = [
    commonRoute + 'Crates/crate_01.png',
    commonRoute + 'Crates/crate_02.png',
    commonRoute + 'Crates/crate_03.png',
    commonRoute + 'Crates/crate_04.png',
    commonRoute + 'Crates/crate_05.png',
    commonRoute + 'Crates/crate_06.png',
    commonRoute + 'Crates/crate_07.png',
    commonRoute + 'Crates/crate_08.png',
    commonRoute + 'Crates/crate_09.png',
    commonRoute + 'Crates/crate_10.png',
    commonRoute + 'Crates/crate_11.png',
    commonRoute + 'Crates/crate_12.png',
    commonRoute + 'Crates/crate_13.png',
    commonRoute + 'Crates/crate_14.png',
    commonRoute + 'Crates/crate_15.png',
    commonRoute + 'Crates/crate_16.png',
    commonRoute + 'Crates/crate_17.png',
    commonRoute + 'Crates/crate_18.png',   
    commonRoute + 'Crates/crate_01.png',
    commonRoute + 'Crates/crate_02.png',
    commonRoute + 'Crates/crate_03.png',
    commonRoute + 'Crates/crate_04.png',
    commonRoute + 'Crates/crate_05.png',
    commonRoute + 'Crates/crate_06.png',
    commonRoute + 'Crates/crate_07.png',
    commonRoute + 'Crates/crate_08.png',
    commonRoute + 'Crates/crate_09.png',
    commonRoute + 'Crates/crate_10.png',
    commonRoute + 'Crates/crate_11.png',
    commonRoute + 'Crates/crate_12.png',
    commonRoute + 'Crates/crate_13.png',
    commonRoute + 'Crates/crate_14.png',
    commonRoute + 'Crates/crate_15.png',
    commonRoute + 'Crates/crate_16.png',
    commonRoute + 'Crates/crate_17.png',
    commonRoute + 'Crates/crate_18.png', 
    commonRoute + 'Crates/crate_19.png',
    commonRoute + 'Crates/crate_20.png',
    commonRoute + 'Crates/crate_21.png',
    commonRoute + 'Crates/crate_22.png',
    commonRoute + 'Crates/crate_23.png',
    commonRoute + 'Crates/crate_24.png',
    commonRoute + 'Crates/crate_25.png',
    commonRoute + 'Crates/crate_26.png',
    commonRoute + 'Crates/crate_27.png',
    commonRoute + 'Crates/crate_28.png',
    commonRoute + 'Crates/crate_29.png',
    commonRoute + 'Crates/crate_30.png',
    commonRoute + 'Crates/crate_31.png',
    commonRoute + 'Crates/crate_36.png',  
    commonRoute + 'Crates/crate_32.png',
    commonRoute + 'Crates/crate_33.png',
    commonRoute + 'Crates/crate_34.png',
    commonRoute + 'Crates/crate_35.png',
    commonRoute + 'Crates/crate_36.png',
    commonRoute + 'Crates/crate_37.png',
    commonRoute + 'Crates/crate_38.png',  
    commonRoute + 'Crates/crate_39.png',
    commonRoute + 'Crates/crate_40.png',
    commonRoute + 'Crates/crate_41.png',
    commonRoute + 'Crates/crate_42.png',
    commonRoute + 'Crates/crate_43.png',
    commonRoute + 'Crates/crate_44.png',
    commonRoute + 'Crates/crate_45.png'
]

var playerSpriteFront = [
    commonRoute + 'Player/player_05.png',
    commonRoute + 'Player/player_06.png',
    commonRoute + 'Player/player_07.png'
];

var playerSpriteBack = [
    commonRoute + 'Player/player_08.png',
    commonRoute + 'Player/player_09.png',
    commonRoute + 'Player/player_10.png'
];

var playerSpriteRight = [
    commonRoute + 'Player/player_17.png',
    commonRoute + 'Player/player_18.png',
    commonRoute + 'Player/player_19.png'
];

var playerSpriteLeft = [
    commonRoute + 'Player/player_20.png',
    commonRoute + 'Player/player_21.png',
    commonRoute + 'Player/player_22.png'
];

function getGroundSprites(){
    return groundSpritesRoutes.map(x => loadImage(x));
}

function getBlockSprites(){
    return blockSpriteRoutes.map(x => loadImage(x));
}

function getCrateSprites(){
    return crateSpritesRoutes.map(x => loadImage(x));
}

function getEnvironmentSprites(){
    return environmentSpritesRoutes.map(x => loadImage(x));
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