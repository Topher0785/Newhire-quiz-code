var score = 0;
var banner = document.querySelector(".banner");
var question= document.querySelector(".rules");
var highscore = document.querySelector(".highscore")
var buttonsrow = document.querySelector(".buttons");
var timer = document.querySelector(".timer");
var timerInterval;
var correctsound = document.querySelector(".correct");
var wrongsound = document.querySelector(".wrong");
var cw = document.querySelector(".cw");
var cwtime = 2;
var seconds = 90;
var aA;
var aB;
var aC;
var aD;

//Opening layout.
function quizopening() {
    highscore.style.visibility = "hidden";

    aA = document.createElement("BUTTON");
    aA.innerHTML = "Start Quiz";
    document.body.children[4].appendChild(aA);
    aA.addEventListener("click", function () {
        question1();
    });

    aB = document.createElement("BUTTON");
    aB.innerHTML = "View Scores";
    document.body.children[4].appendChild(aB);
    aB.addEventListener("click", function () {
        scorepage();
    });
}
quizopening();

//Timer.
function countdown() {
    timerInterval = setInterval(function() {
    seconds --;
    timer.textContent = "Time left: " + seconds;
        if (seconds <= 0) {
            clearInterval (timerInterval);
            seconds = 0;
            timer.textContent = "Time left: 0"
            postquiz();
        }
    }, 1000);
}

//Adds remaining time to the score.
function timepoints() {
    score += seconds;
}

//Correct answer response.
function correct() {
    correctsound.play();
}

//Correct text display.
function correctcw() {
    var yesInterval = setInterval(function() {
    cwtime --;
    cw.setAttribute("style", "color: rgb(112, 177, 112)")
    cw.textContent = "Correct!";
        if (cwtime <= 0) {
            clearInterval (yesInterval);
            cw.textContent = "";
            cwtime = 2;
        }
    }, 350);
}

//Wrong answer response.
function wrong() {
    wrongsound.play();
    seconds -=15;
}

//Wrong text display.
function wrongcw() {
    var noInterval = setInterval(function() {
    cwtime --;
    cw.setAttribute("style", "color:rgb(185, 80, 80)");
    cw.textContent = "Wrong!";
        if (cwtime <= 0) {
            clearInterval (noInterval);
            cw.textContent = "";
            cwtime = 2;
        }
    }, 350);
}

//Question 1 
function question1() {
    aA.remove();
    aB.remove();
    countdown();
    question.textContent = "JavaScript is often seen as";
        
    aA = document.createElement("BUTTON");
    aA.innerHTML = "JS";
    document.body.children[4].appendChild(aA);
    aA.addEventListener("click", function () {
        correctcw();
        question2();
        correct();
    });

    aB = document.createElement("BUTTON");
    aB.innerHTML = "JVASCRPT";
    document.body.children[4].appendChild(aB);
    aB.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    aC = document.createElement("BUTTON");
    aC.innerHTML = "PBANDJscrpit";
    document.body.children[4].appendChild(aC);
    aC.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    aD = document.createElement("BUTTON");
    aD.innerHTML = "c#";
    document.body.children[4].appendChild(aD);
    aD.addEventListener("click", function () {
        wrongcw();
        question2();
        correct();

    });
}

//Question 2 
function question2() {
    aA.remove();
    aB.remove();
    aC.remove();
    aD.remove();
    question.textContent = "HTML stands for...?";
       
    aA = document.createElement("BUTTON");
    aA.innerHTML = "HyperType MultiLevel";
    document.body.children[4].appendChild(aA);
    aA.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });
 
    aB = document.createElement("BUTTON");
    aB.innerHTML = "Hypertext Markup Language";
    document.body.children[4].appendChild(aB);
    aB.addEventListener("click", function () {
        correctcw();
        question3();
        correct();
    });

    aC = document.createElement("BUTTON");
    aC.innerHTML = "Neither";
    document.body.children[4].appendChild(aC);
    aC.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });

    aD = document.createElement("BUTTON");
    aD.innerHTML = "Both";
    document.body.children[4].appendChild(aD);
    aD.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });
}

//Question 3 
function question3() {
    aA.remove();
    aB.remove();
    aC.remove();
    aD.remove();
    question.textContent = "JavaScript does what primarily?";
       
    aA = document.createElement("BUTTON");
    aA.innerHTML = "Holds the website info";
    document.body.children[4].appendChild(aA);
    aA.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });
 
    aB = document.createElement("BUTTON");
    aB.innerHTML = "adds style";
    document.body.children[4].appendChild(aB);
    aB.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });

    aC = document.createElement("BUTTON");
    aC.innerHTML = "removes functionality";
    document.body.children[4].appendChild(aC);
    aC.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });

    aD = document.createElement("BUTTON");
    aD.innerHTML = "adds interactive features";
    document.body.children[4].appendChild(aD);
    aD.addEventListener("click", function () {
        correctcw();
        question4();
        correct();
    });
}

//Question 4 
function question4() {
    aA.remove();
    aB.remove();
    aC.remove();
    aD.remove();
    question.textContent = "JavaScript is invented by ";
       
    aA = document.createElement("BUTTON");
    aA.innerHTML = "Brendan Eich";
    document.body.children[4].appendChild(aA);
    aA.addEventListener("click", function () {
        correctcw();
        question5();
        correct();
    });
 
    aB = document.createElement("BUTTON");
    aB.innerHTML = "Packard Bell";
    document.body.children[4].appendChild(aB);
    aB.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });

    aC = document.createElement("BUTTON");
    aC.innerHTML = "Mario Andretti";
    document.body.children[4].appendChild(aC);
    aC.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });

    aD = document.createElement("BUTTON");
    aD.innerHTML = "None of these";
    document.body.children[4].appendChild(aD);
    aD.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });
}

//Question 5 
function question5() {
    aA.remove();
    aB.remove();
    aC.remove();
    aD.remove();
    question.textContent = "What will hold an array?";
       
    aA = document.createElement("BUTTON");
    aA.innerHTML = "This probably is the easiest one to not choose";
    document.body.children[4].appendChild(aA);
    aA.addEventListener("click", function () {
        wrongcw();
        question6();
        wrong();
    });
 
    aB = document.createElement("BUTTON");
    aB.innerHTML = "an arrayonator";
    document.body.children[4].appendChild(aB);
    aB.addEventListener("click", function () {
        wrongcw();
        question6();
        wrong();
    });

    aC = document.createElement("BUTTON");
    aC.innerHTML = "the Div";
    document.body.children[4].appendChild(aC);
    aC.addEventListener("click", function () {
        wrongcw();
        question6();
        wrong();
    });

    aD = document.createElement("BUTTON");
    aD.innerHTML = "String";
    document.body.children[4].appendChild(aD);
    aD.addEventListener("click", function () {
        correctcw();
        Postquiz();
        correct();
    });
}


    aD = document.createElement("BUTTON");
    aD.innerHTML = "javascript";
    document.body.children[4].appendChild(aD);
    aD.addEventListener("click", function () {
        wrong();
        wrongcw();
        postquiz();
    });


//Post-quiz layout.
function postquiz() {
    timepoints();
    seconds = 0; 
    aA.remove();
    aB.remove();
    aC.remove();
    aD.remove();
    highscore.style.visibility = "visible";
    question.textContent = "Quiz Complete! Your score is " + score + ". Please enter your initials below."
    
    aA = document.createElement("BUTTON");
    aA.innerHTML = "Submit";
    document.body.children[4].appendChild(aA);
    aA.addEventListener("click", function () {
        localStorage.setItem("user", highscore.value);
        localStorage.setItem("score", score);
        scorepage();
    });
}

