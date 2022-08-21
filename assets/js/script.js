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

var i = 0;
var questionBank = [question1, question2, question3, question4, question5]
var currentQuestionObject = "question"
var correctAnswer = "";
var chosenAnswer = "";

function init() {

    function askQuestion (){
    result.textContent = "";
    currentQuestion.textContent = questionBank[i].question;
    option1.textContent = questionBank[i].option1;
    option2.textContent = questionBank[i].option2;
    option3.textContent = questionBank[i].option3;
    option4.textContent = questionBank[i].option4;
    correctAnswer = questionBank[i].correctAnswer;
    console.log(correctAnswer);
    }

    function getAnswer() {

        if (chosenAnswer === correctAnswer) {
            result.textContent = "CORRECT!";
        }
        else {
            result.textContent = "INCORRECT!";

        }
    }

    option1.addEventListener("click", function () {
        console.log("You chose answer 'A'");
        chosenAnswer = "option1";
        getAnswer();
        if (i < 10) {
        i++;
        }
        console.log(i);
        setTimeout(askQuestion, 1000);
    }
    )

    option2.addEventListener("click", function () {
        console.log("You chose answer 'B'");
        chosenAnswer = "option2";
        getAnswer();
        if (i < 10) {
        i++;
        }
        console.log(i);
        setTimeout(askQuestion, 1000);
    }
    )

    option3.addEventListener("click", function () {
        console.log("You chose answer 'C'");
        chosenAnswer = "option3";
        getAnswer();
        if (i < 10) {
        i++;
        }
        console.log(i);
        setTimeout(askQuestion, 1000);
    }
    )

    option4.addEventListener("click", function () {
        console.log("You chose answer 'D'");
        chosenAnswer = "option4";
        getAnswer();
        if (i < 10) {
        i++;
        }
        console.log(i);
        setTimeout(askQuestion, 1000);
    }
    )
    console.log(i)
    askQuestion();
}



init();
