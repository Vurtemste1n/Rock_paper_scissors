function getComputerChoice() {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
    let n = 3;
    let choice = '';
    let randNum = Math.floor(Math.random()*(n+1));
    if (randNum == 0) {
        choice = 'rock';
    } else if (randNum == 1) {
        choice = 'paper';
    } else choice = 'scissors';
}
console.log(getComputerChoice());
