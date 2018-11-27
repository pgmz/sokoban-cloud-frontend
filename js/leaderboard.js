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

    Http.open("GET", window._config.api.invokeBoardUrl + "/score");
    Http.setRequestHeader('Authorization',authToken);
    Http.send();

    Http.onreadystatechange=(e)=>{
        console.log(Http.responseText);
    }

}).catch(function handleTokenError(error) {
    alert(error);
    window.location.href = 'signin.html';
});
});