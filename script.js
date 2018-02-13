// JavaScript Code for Hangman
// Global array containing the possible words to play
var wordList = ['skywalker', 'vader', 'jedi', 'force', 'empire', 'wookie'];
var score = 0;

function randomWord(wList) {
    var word = wList[Math.floor(Math.random() * wList.length)];
    return word;
}

function startGame() {
    var chances = 5;
    var choosenWord = randomWord(wordList);
    var guessedLetters = "";
    document.getElementById("guessed").innerHTML = guessedLetters;
    var masked = mask(choosenWord);
    displayWord(masked);
    console.log(choosenWord);
    // Event listener to get the key pressed by the user
    
        document.onkeyup = function(event) {
            var tempStr = guessLetter(event.key, masked, choosenWord);
            
            
            if (tempStr != masked) {
                masked = tempStr;
                displayWord(tempStr);
            }
            else{
                guessedLetters += event.key;
                chances --;
                document.getElementById("guessed").innerHTML = guessedLetters;
            }
            if(chances <= 0){
                alert("Game Over! Try Again");
                startGame();

            }
            if (masked === choosenWord){
                alert("CONGRATULATIONS! YOU WON!");
                score ++;
                document.getElementById("score").innerHTML = score;
                startGame();               
            }
        }
}

function guessLetter(letter, shown, answer) {
    var foundAt = 0;
    foundAt = answer.indexOf(letter);
    while (foundAt>=0) {
        shown = changeAnswer(foundAt, letter, shown);
        foundAt = answer.indexOf(letter, foundAt + 1);
        // debugger;
    }
    return shown;
    Console.log(shown);
}

// pos is the position where the character has been found in the word.
// originalString is the blank string that was obtained form the mask() funtion
function changeAnswer(pos, letter, originalString){
     return originalString.substr(0, pos) + letter + originalString.substr(pos+1, originalString.length); 
}

function mask(myWord) {
    var blankWord = "";
    for (i in myWord) {
        blankWord += '_';
    }
    return blankWord;
}

function displayWord(myWord) {
    document.getElementById("cWord").innerHTML = myWord;
}