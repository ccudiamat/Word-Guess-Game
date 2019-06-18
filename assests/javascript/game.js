var rbSingers = ["usher","musiq soulchild","daniel caesar","chris brown","ella mai","her"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var inserts = 0;
var guessedLetter = [];
var individual = [];
var slots = [];
var randomSing = "";

var directionsText = document.getElementById("directions-text");

gameStart()

// COUNTERS

document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent = losses;
document.getElementById("guessedLetter").textContent = guessedLetter.join;
document.getElementById("guessesLeft").textContent = guessesLeft;

// KEY PRESS

document.onkeypress = function (event) {

    directionsText.textContent = "";

    letterCheck (event.key);
}

// FUNCTIONS

function gameStart () {

    randomSing = rbSingers[Math.floor(Math.random() *rbSingers.length)];

    var individual = randomSing.split("");

    var inserts = individual.length;

    for (var i = 0; i < inserts; i++) {

        slots.push("_");
    }

    document.getElementById("guessingWord").textContent = "  " + slots.join("  ");
};

// LETTER CHECK (NOT WORKING)

function letterCheck (letter) {

    var foundLetter = false;

    for (var i = 0; i < inserts; i++) {

        if (randomSing[i] === letter) {

            foundLetter = true;
            
        }
    }

    if (foundLetter) {
        
        for (var i = 0; i < inserts; i++) {

            if (randomSing[i] === letter) {

                slots[i] = letter;

                document.getElementById("guessingWord").textContent = "  " + slots.push(" ");
            }
        }
    }
    
    else {

        guessedLetter.push(letter);

        guessesLeft--;
    }

    if (individual === slots) {

        wins++;
        
        document.getElementById("wins").textContent = " " + wins;

    } else if (guessesLeft === 0) {

        losses++;

        reset()

        document.getElementById("losses").textContent = " " + losses;
    }
    document.getElementById("guessedLetter").textContent = guessedLetter;

    document.getElementById("guessesLeft").textContent = " " + guessesLeft;

}

// RESET

function reset() {
    guessesLeft= 10;
    guessedLetter = [];
    slots = [];
    gameStart();
}