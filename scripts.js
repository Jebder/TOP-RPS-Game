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

function game(){
    let pScore = 0;
    let cScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt('Choose your attack!');
        let result = playRound(playerSelection, computerSelection)
        if (result == 'You Win!') {
            pScore = pScore + 1;
        }
        if (result == 'You Lose!'){
            cScore = cScore + 1;
        }
        console.log(result)
        console.log(`Player score = ${pScore}`)
        console.log(`Computer score = ${cScore}`)
        
    }
    if (pScore > cScore){
        console.log('Player Wins!')
    }
    else {
        console.log('Machine wins')
    }
};

game();
    

