
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) +1;
    
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else { 
        return 'scissors';
    }
}     

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock';

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors';

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock';
        
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper';

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper';

    } else if (playerSelection === 'scissors' && computerSelection === ' rock') {
        return 'You lose! Rock beats scissors';
    } else {
        return 'It\'s a tie';
    }
}

function game() {
    for (let i = 1; i < 6; i++) {
        console.log(`Game ${i} out of 5`);
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

const playerSelection = prompt('Pick: Rock, Paper or Scissors');
console.log(game())
