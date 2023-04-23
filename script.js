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

function resetGame() {
    const weaponsDiv = document.querySelector('.weapons');
    const resetButton = document.createElement('button');
    resetButton.innerHTML = 'Reset Game';
    weaponsDiv.innerHTML = '';
    weaponsDiv.appendChild(resetButton);

    // add event listener
    resetButton.addEventListener('click', () => {
        location.reload();
    })
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

            // end of round housekeeping.
            round += 1;
            updateRound(round);
            updateScore(pScore,cScore);
            displayWinner(pScore,cScore);
            if (pScore === 5 || cScore === 5) {   
                resetGame();
            }            
    });
});

// Next step is to remove the listener so that the 3 buttons
// cannot be clicked anymore. THen add a button that will allow
// the player to reset the game and play again. 

// May also wish to make the winner display different. 
// could add a new element in html to do this or display a window
// that will pop up at the end or something. 