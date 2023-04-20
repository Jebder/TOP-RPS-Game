function getComputerChoice(){
    let attack = '';
    let num = Math.floor(Math.random() * 3) +1;
    if (num == 1){
        attack = 'rock';
    }
    else if (num == 2){
        attack = 'paper';
    }
    else {
        attack = 'scissors';
    };
    return attack;
};

function playRound(playerSelection, computerSelection){
    let result;
    switch (playerSelection) {
        case 'rock':
            result = computerSelection === 'scissors' ? 'You Win!' : 'You Lose!';
            break;
        case 'paper':
            result = computerSelection === 'rock' ? 'You Win!' : 'You Lose!';
            break;
        case 'scissors':
            result = computerSelection === 'paper' ? 'You Win!' :'You Lose!';
            break;
    }
    return result;
};

function updateScore(pScore, cScore) {
    const score = document.querySelector('#score');
    score.textContent = `${pScore} : ${cScore}`;
};

function updateRound(roundNum) {
    const score = document.querySelector('h2');
    score.textContent = `Round ${roundNum}!`;
};

function displayWinner(pScore, cScore) {
    if (pScore === 5) {
        const score = document.querySelector('#score');
        score.textContent = `Player Wins!`;
    }
    else if (cScore === 5) {
        const score = document.querySelector('#score');
        score.textContent = `Machine Wins!`;
    };
};

let playerSelection = '';
let pScore = 0;
let cScore = 0;
let round  = 0;
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click',() => {
            playerSelection = button.dataset.key;
            const result = playRound(playerSelection, getComputerChoice());
            if (result === 'You Win!') {
                pScore += 1;
                console.log(pScore + 'p')
            }
            else {
                cScore += 1;
                console.log(cScore + 'c')
            }

            round += 1;
            updateRound(round);
            updateScore(pScore,cScore);
            displayWinner(pScore,cScore);
    });
});