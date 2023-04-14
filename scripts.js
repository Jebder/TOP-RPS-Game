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
};

getComputerChoice();