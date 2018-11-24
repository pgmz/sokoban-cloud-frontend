const Http = new XMLHttpRequest();
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
            if(structureOfBoard != null){
                document.getElementById('continue_button').style.display = "initial";
            }
        }

    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = 'signin.html';
    });
});

function continueGame(){
    window.location.href = 'game.html';
}

function createGame(level){


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

function signOut(){
    Sokoban.signOut();
    window.location.href = 'signin.html';  
}