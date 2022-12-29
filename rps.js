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
let Rock = 'rock';
let Paper = 'paper';
let Scissors = 'scissors';

function rpsGame(computerSelection, playerSelection) {
    // // The user plays the first round
    playerSelection = prompt('It\'s your turn. Type either rock, paper or scissors');

    if (playerSelection.toLowerCase() === Rock) {
        alert('You\'ve played' + ' ' + playerSelection.toLowerCase());

    } else if (playerSelection.toLowerCase() === Paper) {
        alert('You\'ve played' + ' ' + playerSelection.toLowerCase());

    } else if (playerSelection.toLowerCase() === Scissors) {
        alert('You\'ve played' + ' ' + playerSelection.toLowerCase());

    } 
    else { 
        prompt('You can only type either rock, paper or scissors. Try again');
    }
// When the user input is returned, a pop up appears saying that it is the computer turn 
// computerSelection = getComputerChoice();
   
// Declare a function that let the computer choose a random number between 1, 2 and 3 (OK)
function randomNumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    } 

    console.log(randomNumber());

    getComputerChoice();
    function getComputerChoice() {
        // Declare a function that assigns a number to each element "Rock", "Paper" and "Scissor"
        
        if (randomNumber() === 1) {
            computerSelection = Rock;
            alert('The computer played' + ' ' + Rock);
        } else if (randomNumber() === 2) {
            computerSelection = Paper;
            alert('The computer played' + ' ' + Paper);
        } else if(randomNumber() === 3) {
            computerSelection = Scissors;
            alert('The computer played' + ' ' + Scissors);
        }
    
    }

    // if (randomNumber === 1) {
    //     computerSelection = Rock;
    // } else if (randomNumber = 2) {
    //     computerSelection = Paper;
    // } else if (randomNumber = 3) {
    //     computerSelection = Scissors;
    // }
// Write a conditional that assign the computerSelection Rock, paper and scissors to to a number

    

// 1. Verify what was the input of the user and of the computer
// 2. Compare the two results
    function result() {
        if (computerSelection === Rock && playerSelection === Paper) {
            alert('You win ! Paper beats Rock ');
        } else if (computerSelection === Rock && playerSelection === Scissors) {
            alert('You loose ! Rock beats Scissors');
        } else if (computerSelection === Paper && playerSelection === Rock) {
            alert('You loose ! Paper beats Rock');
        } else if (computerSelection === Paper && playerSelection === Scissors) {
            alert('You win ! Scissors beats Paper');
        } else if (computerSelection === Scissors && playerSelection === Paper) {
            alert('You loose ! Scissors beats Paper');
        } else if (computerSelection === Scissors && playerSelection === Rock) {
            alert('You win ! Rock beats Scissors');
        } else if (computerSelection === playerSelection) {
            alert('It\'s a tie. Next round');
        } 
    }
    alert(result())
// 3. If the combination match something alert a specific message

//     let result = rpsResult();
// // When the result is 'rock' with 'scissors', alert 'rock beats scissors'
//     function rpsResult() {
      
//     } 

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




    
