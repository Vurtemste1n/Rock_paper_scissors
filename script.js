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
    return choice;
}
function round(playerSelection,computerSelection) {
    let message = "";
    if (computerSelection == playerSelection) {
        message = ('You are even!');
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        message = (firstLetter(playerSelection) + " beats " + computerSelection + ". You win!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        message = (firstLetter(playerSelection) + " beats " + computerSelection + ". You win!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        message = (firstLetter(playerSelection) + " beats " + computerSelection + ". You win!");
    } else 
        message = (firstLetter(computerSelection) + " beats " + playerSelection + ". You lost!");
    
    return message;
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i <= 4; i++) {
        let computerSelection = caseSens(getComputerChoice());
        let playerSelection = caseSens(prompt("Enter your choice here: "));
        console.log(round(playerSelection,computerSelection));
        if (round(playerSelection,computerSelection).substr(-8) == "You win!" ) {
            playerScore = ++playerScore;
        }
        if (round(playerSelection,computerSelection).substr(-9) == "You lost!" ) {
            computerScore = ++computerScore;
        }
    }
    if (playerScore == computerScore) {
        console.log("Yor are even! You and your computer have equal score.")
    }
    else if (playerScore > computerScore) {
        console.log("You have won " + playerScore + " rounds. Your computer has won " + computerScore + " rounds.You won the game!");
    } else console.log("You have won " + playerScore + " rounds. Your computer has won " + computerScore + " rounds.You lost the game!");
    return ;
}
function caseSens(userPrompt) {
    let caseLow = userPrompt.toLowerCase();
    return caseLow;
}
function firstLetter(string) {
    let lowerCase = string.toLowerCase();
    let bigLetter = (lowerCase.slice(0,1)).toUpperCase() + lowerCase.slice(1);
    return bigLetter;
}
let playerSelection;
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const btnClear = document.querySelector("#clear");
const result = document.querySelector("#result");

btnRock.addEventListener("click",() => {
    playerSelection = btnRock.textContent;
    const para = document.createElement('p');
    result.appendChild(para);
    para.textContent = round(caseSens(playerSelection),getComputerChoice());
});
btnPaper.addEventListener("click",() => {
    playerSelection = btnPaper.textContent;
    const para = document.createElement('p');
    result.appendChild(para);
    para.textContent = round(caseSens(playerSelection),getComputerChoice());
});
btnScissors.addEventListener("click",() => {
    playerSelection = btnScissors.textContent;
    const para = document.createElement('p');
    result.appendChild(para);
    para.textContent = round(caseSens(playerSelection),getComputerChoice());
});
btnClear.addEventListener("click",() => {
    result.textContent = '';
});


