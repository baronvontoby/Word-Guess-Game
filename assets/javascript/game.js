var wins = 0;
var losses = 0;
const answers = [
    {answer: ['b','e','l','l','e'],
     image:'../images.belle.jpg'},
    {answer: ['g','a','s','t','o','n'],
     image:'../images.gaston.jpg' }
];


var guesses = 10;
var guessWord = '';
var lettersCorrect = [];
var lettersIncorrect = [];

document.getElementById("start-game").addEventListener('click', game);

function random (){
    var generator = Math.floor(Math.random()*2)
    return generator;
}

function game (){
    var randomNumber = random();
    guessWord = answers[randomNumber].answer;
    console.log(guessWord);
    document.addEventListener('keyup', function(event){
        function checker () {
            for (let i = 0; i<guessWord.length; i++){
                if ( event.key == guessWord[i] ) {
                    console.log('correct letter');
                    //record to DOM the correct letter
                    //push letter to open array
                    if (lettersCorrect === guessWord ) {
                        wins++;
                    }
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        value = checker();
        if (value === false) {
            guesses--;
            console.log(guesses);
            //record to DOM the incorrect letter
            if ( guesses === 0 ) {
                losses++;
                console.log('lost');
                guesses = 10;
            }
        }
    });
}
