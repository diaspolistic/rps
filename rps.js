// // Declare a function that let the computer choose a random number between 1, 2 and 3 (OK)


// // Declare a function that assigns a number to each element "Rock", "Paper" and "Scissor"
// function getComputerChoice(Rock, Paper, Scissors) {
//     function randomNumber(min, max) {
//         min = Math.ceil(1);
//         max = Math.floor(3);
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//         } 

//     if (randomNumber() === 1) {
//         return('Rock');
//     } else if (randomNumber() === 2) {
//         return('Paper');
//     } else {
//         return('Scissors');
//     }
// }

// Write a function that plays a single round of Rock paper Scissors
function rpsGame(computerSelection, playerSelection) {
    // // The user plays the first round
    playerSelection = prompt('It\'s your turn. Type either rock, paper or scissors');

    if (playerSelection.toLowerCase() === 'rock') {
        alert('You\'ve played' + ' ' + playerSelection.toLowerCase());

    } else if (playerSelection.toLowerCase() === 'paper') {
        alert('You\'ve played' + ' ' + playerSelection.toLowerCase());

    } else if (playerSelection.toLowerCase() === 'scissors') {
        alert('You\'ve played' + ' ' + playerSelection.toLowerCase());

    } 
    else { 
        prompt('You can only type either rock, paper or scissors. Try again');
    }
// When the user input is returned, a pop up appears saying that it is the computer turn 
    alert('It\'s the computer turn');
    computerSelection = getComputerChoice();

    function getComputerChoice() {
        // Declare a function that assigns a number to each element "Rock", "Paper" and "Scissor"
        if (randomNumber() === 1) {
            confirm('The computer played' + ' ' + 'Rock');
        } else if (randomNumber() === 2) {
            confirm('The computer played' + ' ' + 'Paper');
        } else {
            confirm('The computer played' + ' ' + 'Scissors');
        }
    }
       
    // Declare a function that let the computer choose a random number between 1, 2 and 3 (OK)
    function randomNumber(min, max) {
        min = Math.ceil(1);
        max = Math.floor(3);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        } 
}


// Then a pop up appears and asks the playerSelection to play
// The player can use any case variation (case insensitive) 
// After the computer and the playerSelection played
// There's an alert that indicate the winner  with a text
// Each combination has its dedicated alert ()
// Paper beats Rock
// Rock beats Scissors
// Scissors beat Paper
// It's a tie




    
