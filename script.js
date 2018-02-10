// JavaScript Code for Hangman
// Global array containing the possible words to play
var wordList = ['metamorphosis', 'biology', 'compound', 'salt', ];
var choosenWord;
var guessedLetters;
var maskedWord = choosenWord;

function startGame() {
    choosenWord = randomWord(wordList);
    guessedLetters = "";
    console.log(choosenWord);
    maskedWord = maskTheWord(maskedWord); /*word gets masked in _ _*/
    displayMaskedWord(maskedWord); /*masked word is joined and displayed*/
    console.log(choosenWord);
}

function getLetter(event) {
    var char = String.fromCharCode(event.which || event.keyCode);
    searchLetter(char, choosenWord);
}

function searchLetter(letter, word) {
    var hits = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            console.log(word[i]);
            maskedWord[i] = letter;
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
    var cWord = word.split('');
    return cWord;
}

function maskTheWord(myWord) {
    var dashedWord = myWord;
    for (var i = 0; i < myWord.length; i++) {
        dashedWord[i] = '_';
    }
    return dashedWord;
}

function displayMaskedWord(myWord) {
    var joinedWord;
    joinedWord = myWord.join('');
    document.getElementById("cWord").innerHTML = joinedWord;
}