var scoreList = document.querySelector("#score-list");

var initials = localStorage.getItem("initials");
var score = localStorage.getItem("score");
var scoreEntry = initials + " - " + score;
var newScoreList = localStorage.getItem("highscoreList");
var highscores = [];

highscores.push(scoreEntry);

if (highscores != null) {
    highscores.push(newScoreList);
}

var highscoreList = localStorage.setItem("highscoreList", highscores);

function postScores() {
    // scoreList.innerHTML = "";


    for (var i = 0; i < highscores.length; i++) {
        // var scores = highscores[i];

        var li = document.createElement("li");
        li.textContent = highscores[i];
        li.setAttribute("data-index", i);
        scoreList.appendChild(li);

    }
}

postScores()
