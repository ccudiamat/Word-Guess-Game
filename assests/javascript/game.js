var rbSingers = ["usher","musiq soulchild","daniel caesar","chris brown","ella mai","her"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;

var guessedLetter = [];
var currentWord = [];

var directionsText = document.getElementById("directions-text");

var randomSing

// START

document.onkeypress = function (event) {
    directionsText.textContent = "";
    letterCheck (event.key.toUpperCase())
}

// FUNCTIONS

function gameStart () {

    randomSing = rbSingers[Math.floor(Math.random() *rbSingers.length)].toUpperCase();

    lettersOfWord = randomWord.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");
}

// LETTER CHECK

function letterCheck (letter) {

    var guessTrue  = false;

// TRUE STATEMENT

    for (var i = 0; i < blanks; i++) {
        if (randomSing[i] == letter) {
            guessTrue = true;
        }
    }

// FALSE STATEMENT

    if (guessTrue) {
        for (var i = 0; i < blanks; i++) {
            if (randomSing[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }

    else {
        guessedLetter.push(letter);
        guessesLeft--;
    }

}

// RESET

function reset() {
    guessesLeft= 10;
    guessedLetter = [];
    blanksAndCorrect = [];
    gameStart();
}

// DISPLAYED NUMBERS

document.getElementById("wins").innerText = "" + wins;
document.getElementById("losses").innerText = "" + losses;
document.getElementById("guessedLetter").innerText = "" + guessedLetter;
document.getElementById("guessesLeft").innerText = "" + guessesLeft;


