// Declare a variable for each choice 
let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';

// Declare a variable for winner of looser 
let win = 'You win !';
let loose = 'You loose !';

// Declare variable to keep track of the score
let playerScore = 0;
let computerScore = 0;

// Write a function that create a loop to play 5 rounds and the final winner
function game() { 
    for (let i = 0; i < 5; i++) {
        playRound();
    }
 
    if (playerScore >= 3) {
        alert('You\'ve won the Rock, Paper, Scissors game !!');
    
    } else if (playerScore < 3) {
        alert('Oh no, this is so sad, you\'ve lost the Rock, paper, Scissors game');

    } else if (playerScore === computerScore) {
        alert('Well, it looks like the computer and you have the same level... Maybe start another game to find out who is the true Rock, Paper, Scissors champion !')
    }
// Write a function that plays a single round of Rock paper Scissors
function playRound(computerSelection, playerSelection) {
    
    // // The user plays the first round
    getPlayerChoice();
    function getPlayerChoice() {
        playerSelection = prompt('It\'s your turn. Type either rock, paper or scissors');

        if (playerSelection.toLowerCase() === rock) {
            alert('You\'ve played' + ' ' + playerSelection.toLowerCase());

        } else if (playerSelection.toLowerCase() === paper) {
            alert('You\'ve played' + ' ' + playerSelection.toLowerCase());

        } else if (playerSelection.toLowerCase() === scissors) {
            alert('You\'ve played' + ' ' + playerSelection.toLowerCase());

        } 
        else { 
            alert('You can only type either rock, paper or scissors. Try again');
            getPlayerChoice();
        }
    }
   
    getComputerChoice();
    // Declare a function that let the computer choose a random number between 1, 2 and 3 (OK)
    function getComputerChoice() {
        function randomNumber(min, max) {
            min = Math.ceil(1);
            max = Math.floor(3);
            return Math.floor(Math.random() * (max - min + 1)) + min;
            } 
        
    // Assign a value (Rock, Paper or Scissors) to computerSelection parameter according to the randomNumber    
        if (randomNumber() === 1) {
            computerSelection = rock;
            alert('The computer played' + ' ' + rock);
        } else if (randomNumber() === 2) {
            computerSelection = paper;
            alert('The computer played' + ' ' + paper);
        } else if(randomNumber() === 3) {
            computerSelection = scissors;
            alert('The computer played' + ' ' + scissors);
        }
    }

// Compare the computerChoice and the playerSelection and alert the winner/looser 
    result();
    function result() {
        if (computerSelection === rock && playerSelection === paper) {
            playerSelection = win;
            alert(win + ' Paper beats Rock ');
        } else if (computerSelection === rock && playerSelection === scissors) {
            playerSelection = loose;
            alert(loose + ' Rock beats Scissors');
        } else if (computerSelection === paper && playerSelection === rock) {
            playerSelection = loose;
            alert(loose + ' Paper beats Rock');
        } else if (computerSelection === paper && playerSelection === scissors) {
            playerSelection = win;
            alert(win + ' Scissors beats Paper');
        } else if (computerSelection === scissors && playerSelection === paper) {
            playerSelection = loose;
            alert(loose + ' ' + 'Scissors beats Paper');
        } else if (computerSelection === scissors && playerSelection === rock) {
            playerSelection = win;
            alert(win + ' Rock beats Scissors');
        } else if (computerSelection === playerSelection) {
            alert('It\'s a tie.');
        } 

        if (playerSelection === win) {
            playerScore = playerScore + 1;
            console.log('You have ' + playerScore + ' point ' + 'and the computer has ' + computerScore + ' point.' + ' You\'re ahead !');
        
        } else if (playerSelection === loose) {
            computerScore = computerScore + 1;
            console.log('You have ' + playerScore + ' point ' + 'and the computer has ' + computerScore + ' point.' + ' You\'re falling behind...!');
    
        } else if (playerScore ===computerScore) { 
            console.log('You have ' + playerScore + ' point ' + 'and the computer has ' + computerScore + ' point.' + ' It looks like a tie so far.')
        }
    }

}
}
// console.log(playRound());
console.log(game());

