var scoreList = document.querySelector("#score-list");

var initials = localStorage.getItem("initials");
var score = localStorage.getItem("score");

var userScores = [];

function postScores() {
    scoreList.innerHTML = "";


    for (var i = 0; i > userScores.length; i++) {
        var scores = userScores[i];

        var li = document.createElement("li");
        li.textContent = initials + " - " + score;
        li.setAttribute("data-index", i);

        scoreList.appendChild(li);
    }
}

function init() {

var storedScores = JSON.parse(localStorage.getItem())

}