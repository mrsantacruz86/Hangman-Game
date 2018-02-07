// JavaScript Code for Hangman
// Global array containing the possible words to play
var wordList = ['metamorphosis','biology','compound','salt',]
var choosenWord;
var guessedLetters;
var cWord;

function startGame(){
    randomWord(wordList);
    guessedLetters = "";
    console.log(choosenWord);
    var myString = choosenWord;
    for (let i = 0; i < choosenWord.length; i++) {
        myString[i] = "_";
    }
    cWord = myString;
    document.getElementById("cWord").innerHTML = cWord;

}

function getLetter(event){
    var char = String.fromCharCode(event.which || event.keyCode);
    searching(char, choosenWord);
}

function searching(letter, word){
    var hits = 0;
    for(var i = 0;  i < word.length; i++){
        if(word[i] == letter){
            console.log(word[i]);
            cWord[i]= letter;
            hits ++;
        }
    }
    if(hits == 0){
        console.log('you missed');
        guessedLetters += letter;
        document.getElementById('guessed').innerHTML = guessedLetters;
    }
    else {
        console.log('It has ' + hits + ' ' + letter );
    }
    
}

function randomWord(wordList){
    var word = wordList[Math.floor(Math.random() * wordList.length ) ] ;
    choosenWord = word;
}