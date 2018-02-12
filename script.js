// JavaScript Code for Hangman
// Global array containing the possible words to play
var wordList = ['metamorphosis', 'biology', 'compound', 'salt'];

// function startGame() {
var choosenWord = randomWord(wordList);
var guessedLetters = "";
var masked = mask(choosenWord);
displayMaskedWord(masked);
console.log(choosenWord);
// Event listener to get the key pressed by the user
document.onkeyup = function getLetter(event) {
        searchLetter(event.key, choosenWord);
    }
    //displayMaskedWord(maskedWord); /*masked word is joined and displayed*/
console.log(choosenWord);
// }

function searchLetter(letter, word) {
    var guessedLetters = "";
    var hits = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            console.log(word[i]);
            hits++;
        }
    }
    if (hits == 0) {
        console.log('you missed');
        guessedLetters += letter;
        document.getElementById('guessed').innerHTML = guessedLetters;
    } else {
        console.log('It has ' + hits + ' ' + letter);
    }
}

function randomWord(wList) {
    var word = wList[Math.floor(Math.random() * wList.length)];
    return word;
}

function mask(myWord) {
    var dashedWord = [];
    for (var i = 0; i < myWord.length; i++) {
        dashedWord[i] = '_';
    }
    return dashedWord;
}

function displayMaskedWord(myWord) {
    var str = myWord.join('');
    document.getElementById("cWord").innerHTML = str;
}