var Sokoban = window.Sokoban || {};
Sokoban.map = Sokoban.map || {};

$(function(){

    Sokoban.authToken.then(function setAuthToken(token) {
        if (token) {
            window.location.href = 'gameMenu.html';
        } else {
            window.location.href = 'signin.html';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = 'signin.html';
    });
});