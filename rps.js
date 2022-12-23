// Declare a function that let the computer choose a random number between 1, 2 and 3 (OK)
function randomNumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    } 

// Declare a function that assigns a number to each element "Rock", "Paper" and "Scissor"
function getComputerChoice(Rock, Paper, Scissor) {
    if (randomNumber() === 1) {
        return('Rock');
    } else if (randomNumber() === 2) {
        return('Paper');
    } else {
        return('Scissor');
    }
}




    
