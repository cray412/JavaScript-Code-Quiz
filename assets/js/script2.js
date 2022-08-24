var scoreList = document.querySelector("#score-list");
var score = localStorage.getItem("highscores");
var newScores = JSON.parse(localStorage.getItem(newHighscores));

var newHighscores = [];

function getScores() {

    var savedScores = (localStorage.getItem("highscores"));
    newHighscores.push(score);


    // if (savedScores !== null) {
    //     newHighscores = savedScores;
    // }
    postScores();
}

function postScores() {
    scoreList.innerHTML = "";

    for (var i = 0; i < newHighscores.length; i++) {
        var scores = newHighscores[i];

        var li = document.createElement("li");
        li.textContent = scores + "%";
        li.setAttribute("data-index", i);
        scoreList.appendChild(li);
    
        localStorage.setItem("newHighscores", JSON.stringify(newHighscores));
        console.log(score);
        console.log(newHighscores);

    }
}


getScores();



