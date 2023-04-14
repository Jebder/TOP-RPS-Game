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
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors'){
            return 'You Win!'; }
        else if (computerSelection == 'rock'){
            return 'You Tie!';
        }
        else return 'You Lose!';
        }
    if (playerSelection == 'paper') {
        if (computerSelection == 'rock'){
            return 'You Win!'; }
        else if (computerSelection == 'paper'){
            return 'You Tie!';
        }
        else return 'You Lose!';
        }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper'){
            return 'You Win!'; }
        else if (computerSelection == 'scissors'){
            return 'You Tie!';
        }
        else return 'You Lose!';
        }
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
        if (result == 'You Tie!') {
            pScore = pScore + 1;
            cScore = cScore + 1;
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
    

