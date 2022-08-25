var scoreList = document.querySelector("#score-list");
var newScores = (JSON.parse(localStorage.getItem("highscores")));


function postScores() {
    scoreList.innerHTML = "";

    for (var i = 0; i < newScores.length; i++) {
        var newScoreEntry = newScores[i];

        var li = document.createElement("li");
        li.textContent = newScoreEntry.initials + " - " + newScoreEntry.score + "%";
        li.setAttribute("data-index", i);
        scoreList.appendChild(li);
        console.log(newScoreEntry);
    }
    console.log(newScores);
}

postScores();


