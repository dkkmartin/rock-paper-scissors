let playerScore = 0;
let computerScore = 0;

const result = document.querySelector('#result')
result.textContent = `${playerScore}-Human Computer-${computerScore}`;


const btnRock = document.querySelector('#rock')
btnRock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    console.log(`${playerScore}-Player ${computerScore}-Computer`)
    result.textContent = `${playerScore}-Human Computer-${computerScore}`;
})

const btnPaper = document.querySelector('#paper')
btnPaper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    console.log(`${playerScore}-Player ${computerScore}-Computer`)
    result.textContent = `${playerScore}-Human Computer-${computerScore}`;
})

const btnScissors = document.querySelector('#scissors')
btnScissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    console.log(`${playerScore}-Player ${computerScore}-Computer`)
    result.textContent = `${playerScore}-Human Computer-${computerScore}`;
})






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
    if (playerSelection === computerSelection) {
        console.log('TIE')
    } 
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            // player lose
            computerScore++;
            console.log(`${playerSelection}-VS-${computerSelection}`)
        } else {
            // player win
            playerScore++;
            console.log(`${playerSelection}-VS-${computerSelection}`)
        }
    } 
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            //player lose
            computerScore++;
            console.log(`${playerSelection}-VS-${computerSelection}`)
        } else {
            //player win
            playerScore++;
            console.log(`${playerSelection}-VS-${computerSelection}`)
        }
    } 
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            // player lose
            computerScore++;
            console.log(`${playerSelection}-VS-${computerSelection}`)
        } else {
            // player win
            playerScore++;
            console.log(`${playerSelection}-VS-${computerSelection}`)
        }
    }
}
