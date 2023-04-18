function getComputerChoice(){
    let attack = '';
    let num = Math.floor(Math.random() * 3) +1;
    console.log(num);
    if (num == 1){
        attack = 'rock';
    }
    else if (num == 2){
        attack = 'paper';
    }
    else {
        attack = 'scissors';
    };
    console.log(attack)
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

function displayScore(pScore, cScore) {
    const score = document.querySelector('#score');
    score.textContent = `${pScore} : ${cScore}`;
};

function updateRound(roundNum) {
    const score = document.querySelector('h2');
    score.textContent = `Round ${roundNum}!`
};

function game(){

    let playerSelection = '';
    let pScore = 0;
    let cScore = 0;
    const buttons = document.querySelectorAll('.button');
    buttons.addEventListener('click', () => { })
    for (let i = 0; i < 5; i++){

    }
};

game();