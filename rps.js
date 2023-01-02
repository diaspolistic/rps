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

alert('You\'re going to play a \"Rock, Paper, Scissors\" game against the computer. There will be 5 rounds in total.');

function playRound(computerSelection, playerSelection) {
    getPlayerChoice();
    getComputerChoice();
    roundResult();

// The user plays first
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
        console.log(getPlayerChoice());
    }
}
// The computer plays second
function getComputerChoice() {

    // Declare a function that let the computer choose a random number between 1, 2 and 3
        function randomNumber(min, max) {
            min = Math.ceil(1);
            max = Math.floor(3);
            return(Math.floor(Math.random() * (max - min + 1)) + min);
            } 
        computerSelection = randomNumber();

    // Assign a value (rock, paper or scissors) to computerSelection parameter according to the randomNumber    
        if (computerSelection === 1) {
            computerSelection = rock;
            alert('The computer played' + ' ' + rock);
        } else if (computerSelection === 2) {
            computerSelection = paper;
            alert('The computer played' + ' ' + paper);
        } else if(computerSelection === 3) {
            computerSelection = scissors;
            alert('The computer played' + ' ' + scissors);
        }
    }

// Give the result of each round 
    function roundResult() {
        if (computerSelection === rock && playerSelection === paper) {
            playerSelection = win;
            playerScore = playerScore + 1;
            alert(win + ' Paper beats Rock ');
            console.log('You have ' + playerScore + ' point ' + 'and the computer has ' + computerScore + ' point.');
        } else if (computerSelection === rock && playerSelection === scissors) {
            playerSelection = loose;
            computerScore = computerScore + 1;
            alert(loose + ' Rock beats Scissors');
            console.log('You have ' + playerScore + ' point ' + 'and the computer has ' + computerScore + ' point.');
        } else if (computerSelection === paper && playerSelection === rock) {
            playerSelection = loose;
            computerScore = computerScore + 1;
            alert(loose + ' Paper beats Rock');
            console.log('You have ' + playerScore + ' point ' + 'and the computer has ' + computerScore + ' point.');
        } else if (computerSelection === paper && playerSelection === scissors) {
            playerSelection = win;
            playerScore = playerScore + 1;
            alert(win + ' Scissors beats Paper');
            console.log('You have ' + playerScore + ' point ' + 'and the computer has ' + computerScore + ' point.');
        } else if (computerSelection === scissors && playerSelection === paper) {
            playerSelection = loose;
            computerScore = computerScore + 1;
            alert(loose + ' ' + 'Scissors beats Paper');
            console.log('You have ' + playerScore + ' point ' + 'and the computer has ' + computerScore + ' point.');
        } else if (computerSelection === scissors && playerSelection === rock) {
            playerSelection = win;
            playerScore = playerScore + 1;
            alert(win + ' Rock beats Scissors');
            console.log('You have ' + playerScore + ' point ' + 'and the computer has ' + computerScore + ' point.');
        } else if (computerSelection === playerSelection) {
            alert('It\'s a tie.');
            console.log('You have ' + playerScore + ' point ' + 'and the computer has ' + computerScore + ' point.');
        } 

}
}

// Write a function that create a loop to play 5 rounds and the final winner
game();
function game() { 
    for (var i = 0; i < 5; i++) {
        playRound();
    }

    // Give the game final result
    finalResult();
    function finalResult() {
        if ((playerScore > computerScore) || (playerScore >= 3)) {
            console.log('You\'ve won the Rock, Paper, Scissors game !!');
            return;
        
        } else if ((playerScore < computerScore) || (computerScore >=3)) {
            console.log('Oh no, this is so sad, you\'ve lost the Rock, paper, Scissors game');
            return;
    
        } else if (playerScore === computerScore) {
            console.log('Well, it looks like the computer and you have the same level... Maybe start another game to find out who is the true Rock, Paper, Scissors champion !');
        }
        console.log('Here is the final score : '+ 'You have ' + playerScore + ' point ' + 'and the computer has ' + computerScore + ' point.');
    }
}
 
   

// Write a function that plays a single round of Rock paper Scissors



// Compare the computerChoice and the playerSelection and alert the winner/looser 
    

        
    //     roundScore();
    //     function roundScore() {
    //     if (playerSelection === win) {
    //         playerScore = playerScore + 1;
    //         console.log('You have ' + playerScore + ' point ' + 'and the computer has ' + computerScore + ' point.' + ' You\'re ahead !');
        
    //     } else if (playerSelection === loose) {
    //         computerScore = computerScore + 1;
    //         console.log('You have ' + playerScore + ' point ' + 'and the computer has ' + computerScore + ' point.' + ' You\'re falling behind...!');
    
    //     } else if (playerScore === computerScore) { 
    //         console.log('You have ' + playerScore + ' point ' + 'and the computer has ' + computerScore + ' point.' + ' It looks like a tie so far.')
    //     }

    // }
    

 
