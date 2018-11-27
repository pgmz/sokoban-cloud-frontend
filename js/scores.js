const Http = new XMLHttpRequest();
var Sokoban = window.Sokoban || {};
Sokoban.map = Sokoban.map || {};
var authToken;

window.onload = function(){
  console.log("call twice");
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
      if(Http.readyState === XMLHttpRequest.DONE && Http.status === 200) {
        
        var items = JSON.parse(Http.responseText).Items
        var table = document.getElementById("ScoresTable");
        
        items.forEach(element => {
          var parsedItem = JSON.parse(element.value);
          
          var row = table.insertRow(-1);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          cell1.innerHTML = element.level;
          cell2.innerHTML = parsedItem.Score; 
        });
      }
    }

  }).catch(function handleTokenError(error) {
    alert(error);
    window.location.href = 'signin.html';
  });
}
