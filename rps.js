// // Declare a function that let the computer choose a random number between 1, 2 and 3 (OK)
// function randomNumber(min, max) {
//     min = Math.ceil(1);
//     max = Math.floor(3);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//     } 

// // Declare a function that assigns a number to each element "Rock", "Paper" and "Scissor"
// function getComputerChoice(Rock, Paper, Scissors) {
//     if (randomNumber() === 1) {
//         return('Rock');
//     } else if (randomNumber() === 2) {
//         return('Paper');
//     } else {
//         return('Scissors');
//     }
// }

// Write a function that plays a single round of Rock paper Scissors
// When the computer plays first
function computerTurn() {
    alert('It\'s the computer turn');
    // And the user click 'OK'

    // Declare a function that let the computer choose a random number between 1, 2 and 3 (OK)
    function randomNumber(min, max) {
        min = Math.ceil(1);
        max = Math.floor(3);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        } 
    
    // Declare a function that assigns a number to each element "Rock", "Paper" and "Scissor"
    function getComputerChoice(Rock, Paper, Scissors) {
        if (randomNumber() === 1) {
            alert('Rock');
        } else if (randomNumber() === 2) {
            alert('Paper');
        } else {
            alert('Scissors');
        }
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




    
