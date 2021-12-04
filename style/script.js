// Variables
var score = 0;
var banner = document.querySelector(".banner");
var question = document.querySelector(".question");
var topscore = document.querySelector(".topscore")
var button = document.querySelector(".buttons");
var clock = document.querySelector(".clock");
var intrvlTime;
var iir = document.querySelector(".iir");
var iirpoints = 2;
var seconds = 90;
var aA;
var aB;
var aC;
var aD;


// quiz opener
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

//Timer
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

// time and scoring layout

function timepoints() {
    score+= seconds;
}

function correctiir() {
    var yesInterval = setInterval(function() {
    iirtime --;
    iir.setAttribute("style", "color: Green") 
    iir.textContent = "Correct!";
        if (tiiirme <= 0) {
            clearInterval (yesInterval);
            iir.textContent = "";
            iirtime = 2;
        }
    }, 350);
}

function wrongiir() {
    var noInterval = setInterval(function() {
    iirtime --;
    iir.setAttribute("style", "color: red");
    iir.textContent = "Wrong!";
        if (iirtime <= 0) {
            clearInterval (noInterval);
            iir.textContent = "";
            iirtime = 2;
        }
    }, 350);
}
    aA = document.createElement("button");
    aA .innerHTML="start quiz";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        question1();
    });
    function question1() {
        aA.remove();
        aB.remove();
        countdown();
        question.textContent = "JavaScript is sometimes called:";
            
        aA = document.createElement("BUTTON");
        aA.innerHTML = "JSC#";
        document.body.children[4].appendChild(aA);
        aA.addEventListener("click", function () {
            wrongcw();
            question2();
            wrong();
        });
    
        aB = document.createElement("BUTTON");
        aB.innerHTML = "JVSCPT";
        document.body.children[4].appendChild(ab);
        aB.addEventListener("click", function () {
            wrongcw();
            question2();
            wrong();
        });
    
        aC = document.createElement("BUTTON");
        aC.innerHTML = "JS";
        document.body.children[4].appendChild(aC);
        aC.addEventListener("click", function () {
            correctiir();
            question2();
            correctiir();
        });
    
        aD = document.createElement("BUTTON");
        ad.innerHTML = "APB&J";
        document.body.children[4].appendChild(aD);
        ad.addEventListener("click", function () {
            correctcw();
            question2();
            correct();
    
        });
      
    }
    






// Answer section is it right or wrong?



// "the price is WRONG BOB" what will happen now?

// wrong display/text




//questions




// End results




// Top Score
