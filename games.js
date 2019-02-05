var getLetter;
var computerChoices = abcdefghijlmnopqrstuvwxyz;
var wins = 0;
var losses = 0;
var numGuesses = 10;
var Guessesleft;
var userChoice = 0;

window.addEventListener("onkeydown", function(event) {

    var userChoice = event.key;

if (numGuesses > 0){  
    getLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

    for (i=0; i<computerChoices.length; i++) {
        userChoice = ("");
    if (userChoice === computerChoices) {
    winN++;
    } 
    else {
    loseN++;}

totalEntry.push(userChoice);                    
Guessesleft--;

document.getElementById("userwin").innerHTML = wins;
document.getElementById("userlose").innerHTML = losses;
document.getElementById("userguess").innerHTML = GuessesLeft;
document.getElementById("userguesslist").innerHTML = numGuesses;  
    
    }
}