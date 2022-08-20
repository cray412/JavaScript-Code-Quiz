var currentQuestion = document.querySelector("#questionField");

var question1 = {
    question: "1. What does CSS stand for?",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d"
}

var question2 = {
    question: "2. Question #2",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d"
}

var question3 = {
    question: "3. Question #3",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d"
}

var question4 = {
    question: "4. Question #4",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d"
}

var question5 = {
    question: "5. Question #5",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d"
}

var question6 = {
    question: "6. Question #6",
    option1: "a",
    option2: "b",
    option3: "c",
    option4: "d"
}

function displayQuestion () {
    currentQuestion.textContent = question1.question;
}



displayQuestion();