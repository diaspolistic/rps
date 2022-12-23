// Declare each element
// Assign a random number to each element ('Rock', 'Paper', 'Scissor')
// Round the number for a cleaner code

// const Rock = Math.floor(Math.random() + 1);
// const Paper = Math.floor(Math.random() + 2);
// const Scissor = Math.floor(Math.random() + 3);

// If the number is x, print 'Rock'
// If the number is y, print 'Paper'
// Otherwise print 'Scissor'

// The computer choose a random number between 1, 2 and 3 (OK)
function randomNumber(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;

    } 
// Declare a function to assign a number to each element
function getComputerChoice(Rock, Paper, Scissor) {
    if (randomNumber() === 1) {
        return('Rock');
    } else if (randomNumber() === 2) {
        return('Paper');
    } else {
        return('Scissor');
    }
}
   




// Print the variable associated with that number


// When I input console.log(getComputerChoice), 
// Print randomly 'Rock', 'Paper' or 'Scissor'



    
