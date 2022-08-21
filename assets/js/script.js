var currentQuestion = document.querySelector("#questionField");
var option1 = document.querySelector("#answer1");
var option2 = document.querySelector("#answer2");
var option3 = document.querySelector("#answer3");
var option4 = document.querySelector("#answer4");
var result = document.querySelector("#result");

var question1 = {
    question: "1. What does CSS stand for?",
    option1: "Cyber Security System",
    option2: "Computer Screen Standards",
    option3: "Cascading Style Sheet",
    option4: "Cyberdyne Systems Skynet",
    correctAnswer: "option3"
}

var question2 = {
    question: "2. Question #2",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option1"
}

var question3 = {
    question: "3. Question #3",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option2"
}

var question4 = {
    question: "4. Question #4",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option2"
}

var question5 = {
    question: "5. Question #5",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option4"
}

var question6 = {
    question: "6. Question #6",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option1"
}

var question7 = {
    question: "7. Question #7",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option1"
}

var question8 = {
    question: "8. Question #8",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option2"
}

var question9 = {
    question: "9. Question #9",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option2"
}

var question10 = {
    question: "10. Question #10",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d",
    correctAnswer: "option4"
}
var i = 0;
var questionBank = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
var currentQuestionObject = "question";
var correctAnswer = "";
var chosenAnswer = "";
var wrongSound = new Audio("./assets/sounds/Wrong.mp3");
var rightSound = new Audio("./assets/sounds/Right.mp3");
function init() {

    // function randomizeQuestion(array) {
    //     for (var j = array.length - 1; j > 0; j--){
    //         var n = Math.floor(Math.random() * (j + 1));
    //         var temp = array[j];
    //         array[j] = array[n];
    //         array[n] = temp;
    //     }
    //     return array;
    // }

    function askQuestion() {
        result.textContent = "";
        currentQuestion.textContent = questionBank[i].question;
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
        wrongSound.pause();
        wrongSound = new Audio("./assets/sounds/Wrong.mp3");
        wrongSound.play();
    }

     function playRight() {
        rightSound.pause();
        rightSound = new Audio("./assets/sounds/Right.mp3");
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
        }
    }

    function disableButtons(){
        
        document.querySelector("#answer1").disabled = true;
        document.querySelector("#answer2").disabled = true;
        document.querySelector("#answer3").disabled = true;
        document.querySelector("#answer4").disabled = true;
    }

    function quizFinished(){
        window.location.href = "./finished.html"
    }

    option1.addEventListener("click", function () {
        disableButtons();
        console.log("You chose answer 'A'");
        chosenAnswer = "option1";
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
    )

    option2.addEventListener("click", function () {
        disableButtons();
        console.log("You chose answer 'B'");
        chosenAnswer = "option2";
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
    )

    option3.addEventListener("click", function () {
        disableButtons();
        console.log("You chose answer 'C'");
        chosenAnswer = "option3";
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
    )

    option4.addEventListener("click", function () {
        disableButtons();
        console.log("You chose answer 'D'");
        chosenAnswer = "option4";
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
    )
    console.log(i)
    askQuestion();
}

init();