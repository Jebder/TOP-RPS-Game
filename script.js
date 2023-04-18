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

function updateScore(pScore, cScore) {
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
// i = 1 in the loop so that we can pass it into the updateRound
// function and update the round.
    for (let i = 1; i < 6; i++){
        updateRound(i);
        updateScore(pScore, cScore);
        buttons.forEach((button) => {
            button.addEventListener('click',() => {
                    playerSelection = button.dataset.key;
                    playRound(playerSelection, getComputerChoice());
                });
        })
    }return console.log('Yes')
};
game();