var scoreList = document.querySelector("#score-list");
var initials = localStorage.getItem("initials");
var score = localStorage.getItem("score");
var scoreEntry = initials + " - " + score;

var highscores = [];


function postScores() {
    scoreList.innerHTML = "";

    for (var i = 0; i < highscores.length; i++) {
        var scores = highscores[i];

        var li = document.createElement("li");
        li.textContent = scores;
        li.setAttribute("data-index", i);
        scoreList.appendChild(li);

    }
}

function init() {

    var savedScores = JSON.parse(localStorage.getItem("highscores"));

    if (savedScores !== null) {
        highscores = savedScores;
    }

    postScores();
}

function saveScores() {
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

highscores.push(scoreEntry);
init();

saveScores();
postScores();


