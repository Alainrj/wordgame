var getLetter;
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var wins = 0;
var losses = 0;
var numGuesses = 10;
var guessesLeft;
var userChoice = 0;
var totalEntry = 0;



console.log("in JS")
document.onkeydown=function(event){

 
    console.log("in keydown")
    var userChoice = event.key;

    if (numGuesses > 0) {
        getLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    for (i = 0; i < computerChoices.length; i++) {
        userChoice = ("");
        if (userChoice === computerChoices) {
            wins++;
        } else {
            losses++;
        }

        totalEntry.push(userChoice);
     guessesLeft--;

        document.getElementById("userwin").innerHTML = wins;
        document.getElementById("userlose").innerHTML = losses;
        document.getElementById("userguess").innerHTML = guessesLeft;
        document.getElementById("userguesslist").innerHTML = numGuesses;

    }
}