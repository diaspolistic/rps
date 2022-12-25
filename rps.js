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
    // The user plays the first round
    playerSelection = prompt('It\'s your turn. Type either rock, paper or scissor');
    if (playerSelection === 'rock') {
        return(playerSelection);

    } else if (playerSelection === 'paper') {
        return(playerSelection);

    } else if (playerSelection === 'scissors')
        return(playerSelection);

    else { 
        prompt('You can only type either rock, paper or scissor. Try again');
    }
    
    
    }
        


    {
        // computerSelection = prompt('It\'s the computer turn')
    function getComputerChoice(Rock, Paper, Scissors) {
        // Declare a function that assigns a number to each element "Rock", "Paper" and "Scissor"
        if (randomNumber() === 1) {
            alert('Rock');
        } else if (randomNumber() === 2) {
            alert('Paper');
        } else {
            alert('Scissors');
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




    
