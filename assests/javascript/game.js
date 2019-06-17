var rbSingers = ["usher","musiq_soulchild","trey_songz","chris_brown","ella_mai","her"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;

var guessedLetter = [];
var guessWord = [];

// START

document.onkeypress = function (event) {

}

// FUNCTIONS

function Game () {

    randomSing = rbSingers[Math.floor(Math.random() *rbSingers.length)];

}

// RESET

function reset() {
    guessesLeft= 10;
    guessedLetter = [];
    blanksAndCorrect = [];
    Game();
}

// DISPLAY

document.getElementById("wins").innerHTML = "" + wins;
document.getElementById("losses").innerHTML = "" + losses;
document.getElementById("guessedLetter").innerHTML = "" + wins;
