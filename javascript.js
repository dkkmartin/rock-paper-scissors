let playerScore = 0;
let computerScore = 0;
const result = document.querySelector('#result');



const btnRock = document.querySelector('#rock')
btnRock.addEventListener('click', () => {
    roundOfFiveGames('rock', getComputerChoice());
})

const btnPaper = document.querySelector('#paper')
btnPaper.addEventListener('click', () => {
    roundOfFiveGames('paper', getComputerChoice());
})

const btnScissors = document.querySelector('#scissors')
btnScissors.addEventListener('click', () => {
    roundOfFiveGames('scissors', getComputerChoice());
})

function roundOfFiveGames(playerSelection, computerSelection) {
    playRound(playerSelection, computerSelection)
    if (playerScore === 5) {
        result.textContent = 'Human Wins!';
        resetGame()
    }
    else if (computerScore === 5) {
        result.textContent = 'Computer Wins!';
        resetGame()
    }

}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

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
    if (playerSelection === computerSelection) {
        result.textContent = 'TIE-Human Computer-TIE';
    } 
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            // player lose
            computerScore++;
            result.textContent = `${playerScore}-Human Computer-${computerScore}`;
        } else {
            // player win
            playerScore++;
            result.textContent = `${playerScore}-Human Computer-${computerScore}`;
        }
    } 
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            //player lose
            computerScore++;
            result.textContent = `${playerScore}-Human Computer-${computerScore}`;
        } else {
            //player win
            playerScore++;
            result.textContent = `${playerScore}-Human Computer-${computerScore}`;
        }
    } 
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            // player lose
            computerScore++;
            result.textContent = `${playerScore}-Human Computer-${computerScore}`;
        } else {
            // player win
            playerScore++;
            result.textContent = `${playerScore}-Human Computer-${computerScore}`;
        }
    }
}
