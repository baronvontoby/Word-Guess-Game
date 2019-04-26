// get doucment by id so that when game starts the element becomes hidden
// lets start the game by hiding the element that says hit any key to start the game

//create an array that houses the answers to your question for randomization
// const ANSWERS = [
//     {"bell":"BELL"},
//     {"gaston":"GASTON"},
// ];

var wins = 0;
var losses = 0;
var answer = ["b","e","l","l","e"];
var triesRemaining = 10;
var correctWord = "";
console.log(correctWord);

// document.getElementById("remaining-guesses").nodeType= triesRemaining;

//create a function that recognizes what onkeyup was pressed

document.addEventListener('DOMContentLoaded', function () {
    document.onkeyup = function (event) {
        // console.log(event);
        if ( answer.includes(event.key)) {
            console.log("correct " + event.key + " is in the answer!")
            // event.key = correctWord;
            // console.log(correctWord);
            // correctWord = answer;
            wins++;
            var crctLtr = document.createTextNode(event.key);
            document.getElementById("correct-letters").appendChild(crctLtr);
        } 

        else if (triesRemaining>1) {

            triesRemaining = triesRemaining - 1;
            console.log(triesRemaining);
            console.log("Darn IT that's wrong! try again.");
            var gess = document.createTextNode(triesRemaining);
            document.getElementById("remaining-guesses").appendChild(gess);
        }

        else {
            triesRemaining = 0;
            console.log("game over");
            triesRemaining = 10;
            losses++;
        }
    }
});

//create a function that records your wins
// function needs to pull data from game function

// for (let i=0; i<ANSWERS.length; i++) {
//     if (ANSWERS.indexOf(/*keyPressed*/) == 
//     }
// }
// function winRecord() {

// }
// //create a 3 functions, one that tells you if you got your letter right, one that tells you if you got your letter wrong, one that tells you how many guesses you have left

// function startGame() {

// }

//create a function that resets the game to the next line in the array

// var alphabet = "abcdefghijklmnopqrstuvwxyz";

// if (!ANSWERS.indexOf(/*keyPressed*/) >=0) {
//     return;
// }