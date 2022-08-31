let playerScore = 0;
let computerScore = 0;

const playerSelection = prompt('Pick: Rock, Paper or Scissors');
console.log(game())

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) +1;
    
    switch (randomNumber) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}     

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return 'You lose! Paper beats Rock';
        

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You win! Rock beats Scissors';

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You win! Paper beats Rock';
        
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return 'You Lose! Scissors beats Paper';

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You win! Scissors beats Paper';

    } else if (playerSelection === 'scissors' && computerSelection === ' rock') {
        computerScore++;
        return 'You lose! Rock beats scissors';
    } else {
        return 'It\'s a tie';
    }
}

function game() {
    for (let i = 1; i < 6; i++) {
        console.log(`Game ${i} out of 5`);
        console.log(playRound(playerSelection, getComputerChoice()));
        console.log(`Score: ${playerScore}-Player ${computerScore}-Computer`)
    }
}

