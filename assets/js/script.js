var currentQuestion = document.querySelector("#questionField");
var start = document.querySelector("startBtn");
var option1 = document.querySelector("#answer1");
var option2 = document.querySelector("#answer2");
var option3 = document.querySelector("#answer3");
var option4 = document.querySelector("#answer4");
var result = document.querySelector("#result");
var timeEl = document.querySelector("#time");

var question1 = {
    question: "What does CSS stand for?",
    option1: "Cyber Security System",
    option2: "Computer Screen Standards",
    option3: "Cascading Style Sheet",
    option4: "Cyberdyne Systems Skynet",
    correctAnswer: "option3"
}

var question2 = {
    question: "Question #2",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option1"
}

var question3 = {
    question: "Question #3",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option2"
}

var question4 = {
    question: "Question #4",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option2"
}

var question5 = {
    question: "Question #5",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option4"
}

var question6 = {
    question: "Question #6",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option1"
}

var question7 = {
    question: "Question #7",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option1"
}

var question8 = {
    question: "Question #8",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option2"
}

var question9 = {
    question: "Question #9",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option2"
}

var question10 = {
    question: "Question #10",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option4"
}

var i = 0;
var questionBank = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var correctAnswer = "";
var chosenAnswer = "";
var wrongSound = new Audio("./assets/sounds/Wrong.mp3");
var rightSound = new Audio("./assets/sounds/Right.mp3");

function init() {

    // start.textContent = "START";

    timeEl.textContent = "";
    secondsLeft = 150;

    setInterval(timer, 1000);

    function timer() {
        var minutes = Math.floor(secondsLeft / 60);
        var seconds = secondsLeft % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        else {
            seconds = seconds;
        }

        timeEl.textContent = "Time remaining: " + minutes + ":" + seconds;
        secondsLeft--;

        if (secondsLeft === 0) {
            window.location.href = "./timesup.html"
        };

    }

    timer();

    function quiz() {

        function randomizeQuestion() {
            for (var j = questionBank.length - 1; j > 0; j--) {
                var n = Math.floor(Math.random() * (j + 1));
                var temp = questionBank[j];
                questionBank[j] = questionBank[n];
                questionBank[n] = temp;
            }
        }

        randomizeQuestion();

        function askQuestion() {
            result.textContent = "";
            currentQuestion.textContent = ((i + 1) + ". " + questionBank[i].question);
            option1.textContent = questionBank[i].option1;
            option2.textContent = questionBank[i].option2;
            option3.textContent = questionBank[i].option3;
            option4.textContent = questionBank[i].option4;
            correctAnswer = questionBank[i].correctAnswer;
            document.querySelector("#answer1").disabled = false;
            document.querySelector("#answer2").disabled = false;
            document.querySelector("#answer3").disabled = false;
            document.querySelector("#answer4").disabled = false;
            console.log(correctAnswer);
        }

        function playWrong() {
            wrongSound.play();
        }

        function playRight() {
            rightSound.play();
        }

        function getAnswer() {

            if (chosenAnswer === correctAnswer) {
                playRight();
                result.textContent = "CORRECT!";
            }
            else {
                playWrong();
                result.textContent = "INCORRECT!";
                secondsLeft = secondsLeft - 15;
            }
        }

        function disableButtons() {

            document.querySelector("#answer1").disabled = true;
            document.querySelector("#answer2").disabled = true;
            document.querySelector("#answer3").disabled = true;
            document.querySelector("#answer4").disabled = true;
        }

        function checkAnswer() {
            disableButtons();
            getAnswer();
            if (i < questionBank.length - 1) {
                i++;
                console.log(i);
                setTimeout(askQuestion, 1000);
            }
            else {
                setTimeout(quizFinished, 2000);
            }
        }

        function quizFinished() {
            window.location.href = "./finished.html"
        }

        option1.addEventListener("click", function () {
            console.log("You chose answer 'A'");
            chosenAnswer = "option1";
            checkAnswer();
        }
        )

        option2.addEventListener("click", function () {
            console.log("You chose answer 'B'");
            chosenAnswer = "option2";
            checkAnswer();
        }
        )

        option3.addEventListener("click", function () {
            console.log("You chose answer 'C'");
            chosenAnswer = "option3";
            checkAnswer();
        }
        )

        option4.addEventListener("click", function () {
            console.log("You chose answer 'D'");
            chosenAnswer = "option4";
            checkAnswer();
        }
        )
        console.log(i)
        askQuestion();
    }

    console.log(questionBank);

    quiz();
}

init();