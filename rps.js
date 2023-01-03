// I've added comments to each function to understand what each one does :)

// Assign a variable for each choice 
let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';

// Assign a variable for winner of looser 
let win = 'You win !';
let loose = 'You loose !';

// Assign variable to keep track of the score
let playerScore = 0;
let computerScore = 0;

// Assign a variable to give details when game won or lost
let gameWon = 'You\'ve won the Rock, Paper, Scissors game !!';
let gameLost = 'Oh no, this is so sad, you\'ve lost the Rock, Paper, Scissors game';
let gameDraw = 'Well, it looks like the computer and you have the same level...';

// Show a first alert that indicate what will the game be
alert('You\'re going to play a \"Rock, Paper, Scissors\" game against the computer. There will be up to 5 rounds.');

// Declare a function that call functions to play one round of the game
function playRound(computerSelection, playerSelection) {
    getPlayerChoice();
    getComputerChoice();
    roundResult();


    // Declare a function that let the user plays first and give an input
    function getPlayerChoice() {
        playerSelection = prompt('It\'s your turn. Type either rock, paper or scissors');

        if (playerSelection.toLowerCase() === rock) {
            alert('You\'ve played' + ' ' + playerSelection.toLowerCase());

        } else if (playerSelection.toLowerCase() === paper) {
            alert('You\'ve played' + ' ' + playerSelection.toLowerCase());

        } else if (playerSelection.toLowerCase() === scissors) {
            alert('You\'ve played' + ' ' + playerSelection.toLowerCase());

        } else { 
            alert('You can only type either rock, paper or scissors. Try again');
            console.log(getPlayerChoice());
        }
    }
        // Declare a function that let the computer plays second with a random choice
        function getComputerChoice() {

            // Declare a function that let the computer choose a random number between 1, 2 and 3
            function randomNumber(min, max) {
                min = Math.ceil(1);
                max = Math.floor(3);
                return(Math.floor(Math.random() * (max - min + 1)) + min);
                } 

            // Assign the computerSelection argument to the randomNumber 
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

        // Declare a function that gives the result of each round and compare the computerChoice and the playerSelection and alert the winner/looser 
        function roundResult() {

            if (computerSelection === rock && playerSelection === paper) {
                playerSelection = win;
                playerScore = playerScore + 1;
                alert(win + ' Paper beats Rock ');
            
            } else if (computerSelection === rock && playerSelection === scissors) {
                playerSelection = loose;
                computerScore = computerScore + 1;
                alert(loose + ' Rock beats Scissors');
            
            } else if (computerSelection === paper && playerSelection === rock) {
                playerSelection = loose;
                computerScore = computerScore + 1;
                alert(loose + ' Paper beats Rock');
            
            } else if (computerSelection === paper && playerSelection === scissors) {
                playerSelection = win;
                playerScore = playerScore + 1;
                alert(win + ' Scissors beats Paper');
              
            } else if (computerSelection === scissors && playerSelection === paper) {
                playerSelection = loose;
                computerScore = computerScore + 1;
                alert(loose + ' ' + 'Scissors beats Paper');
               
            } else if (computerSelection === scissors && playerSelection === rock) {
                playerSelection = win;
                playerScore = playerScore + 1;
                alert(win + ' Rock beats Scissors');
               
            } else if (computerSelection === playerSelection) {
                alert('It\'s a tie.');
            } 

            let currentScore = 'You have ' + playerScore + ' point' + (playerScore > 1 ? 's' : '') + ' and the computer has ' + computerScore + ' point' + (computerScore > 1 ? 's.' : '.');
            console.log(currentScore);
          
    } 
} 

// Declare a function that create a loop to play 5 rounds and the final winner
game();
function game() { 
    for (var i = 0; i < 5; i++) {
        playRound();
        if ((i >= 3) && (playerScore || computerScore) >= 3) {
            finalResult();
            return;
        } else if ((i == 4) && (playerScore || computerScore) == 1 && (playerScore || computerScore) == 2) {
            playRound;
        }
    }

    // Declare a function with conditionals that gives the game final result and asks the user if he/she wants to play another game of Rock, Paper, Scissors. 
    finalResult()
    function finalResult() { 
        // Assign a variable finalScore to a long string that gives the final score
        let finalScore = 'You have ' + playerScore + ' point' + (playerScore > 1 ? 's' : '') + ' and the computer has ' + computerScore + ' point' + (computerScore > 1 ? 's.' : '.');

        if ((playerScore > computerScore) || (playerScore >= 3)) {
            alert(gameWon);
            console.log(gameWon);
            console.log('Here is the final score :' + finalScore);
        
        } else if ((playerScore < computerScore) || (computerScore >= 3)) {
            alert(gameLost);
            console.log(gameLost);
            console.log('Here is the final score :' + finalScore);
            
        } else if ((playerScore === computerScore) && i == 5) {
            alert(gameDraw);
            console.log(gameDraw);
            console.log('Here is the final score :' + finalScore);

        } newGame = prompt('Do you want to start a new game of Rock, Paper, Scissors ? Write "Yes" to start another game.');
        if (newGame.toLowerCase() == 'yes') {
            game();

        } else {
            return;
        }
        
    }
}
    

 
