// Declare a variable for each choice 
let Rock = 'rock';
let Paper = 'paper';
let Scissors = 'scissors';

// Declare a variable for winner of looser 
let Win = 'You win !';
let Loose = 'You loose !';

// Write a function that create a loop to play 5 rounds and the final winner
function game() { 
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    // if (result() 
}
// Write a function that plays a single round of Rock paper Scissors
function playRound(computerSelection, playerSelection) {
    
    // // The user plays the first round
    getPlayerChoice();
    function getPlayerChoice() {
        playerSelection = prompt('It\'s your turn. Type either rock, paper or scissors');

        if (playerSelection.toLowerCase() === Rock) {
            alert('You\'ve played' + ' ' + playerSelection.toLowerCase());

        } else if (playerSelection.toLowerCase() === Paper) {
            alert('You\'ve played' + ' ' + playerSelection.toLowerCase());

        } else if (playerSelection.toLowerCase() === Scissors) {
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

// Compare the computerChoice and the playerSelection and alert the winner/looser 
    result();
    function result() {
        if (computerSelection === Rock && playerSelection === Paper) {
            alert(Win + ' Paper beats Rock ');
        } else if (computerSelection === Rock && playerSelection === Scissors) {
            alert(Loose + ' Rock beats Scissors');
        } else if (computerSelection === Paper && playerSelection === Rock) {
            alert(Loose + ' Paper beats Rock');
        } else if (computerSelection === Paper && playerSelection === Scissors) {
            alert(Win + ' Scissors beats Paper');
        } else if (computerSelection === Scissors && playerSelection === Paper) {
            alert(Loose + ' ' + 'Scissors beats Paper');
        } else if (computerSelection === Scissors && playerSelection === Rock) {
            alert(Win + ' Rock beats Scissors');
        } else if (computerSelection === playerSelection) {
            alert('It\'s a tie.');
        } 
    }

}
// console.log(playRound());
console.log(game());

