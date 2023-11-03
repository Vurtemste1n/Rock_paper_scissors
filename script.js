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
function score(textContent) {
    let playerScore = 0;
    let computerScore = 0;
        if (textContent.substr(-8) == "You win!" ) {
            playerScore = ++playerScore;
        }
        if (textContent.substr(-9) == "You lost!" ) {
            computerScore = ++computerScore;
        } return [playerScore,computerScore];
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
    const playerScoreTracker = document.querySelector("#playerScore");
    const computerScoreTracker = document.querySelector("#computerScore");
    playerScoreTracker.textContent = "0";
    computerScoreTracker.textContent = "0";
    let scoreTracker; 
    btnRock.addEventListener("click",() => {
        playerSelection = btnRock.textContent;
        const para = document.createElement('p');
        result.appendChild(para);
        para.textContent = round(caseSens(playerSelection),getComputerChoice());
        scoreTracker = score(para.textContent);
        playerScoreTracker.textContent = `${Number(playerScoreTracker.textContent) + scoreTracker[0]}`;
        computerScoreTracker.textContent = `${Number(computerScoreTracker.textContent) + scoreTracker[1]}`;
            if (playerScoreTracker.textContent == '5') {
                result.textContent = '';
                playerScoreTracker.textContent = '0';
                computerScoreTracker.textContent = '0';
                para.textContent = "Player has won!";
                result.appendChild(para);
            } else if (computerScoreTracker.textContent == '5') {
                result.textContent = '';
                playerScoreTracker.textContent = '0';
                computerScoreTracker.textContent = '0';
                para.textContent = "Player has won!";
                result.appendChild(para);
            }
    });
    btnPaper.addEventListener("click",() => {
        playerSelection = btnPaper.textContent;
        const para = document.createElement('p');
        result.appendChild(para);
        para.textContent = round(caseSens(playerSelection),getComputerChoice());
        scoreTracker = score(para.textContent);
        playerScoreTracker.textContent = `${Number(playerScoreTracker.textContent) + scoreTracker[0]}`;
        computerScoreTracker.textContent = `${Number(computerScoreTracker.textContent) + scoreTracker[1]}`;
        if (playerScoreTracker.textContent == '5') {
            result.textContent = '';
            playerScoreTracker.textContent = '0';
            computerScoreTracker.textContent = '0';
            para.textContent = "Player has won!";
            result.appendChild(para);
        } else if (computerScoreTracker.textContent == '5') {
            result.textContent = "";
            playerScoreTracker.textContent = '0';
            computerScoreTracker.textContent = '0';
            para.textContent = "Computer has won!";
            result.appendChild(para);
        }

    });
        btnScissors.addEventListener("click",() => {
        playerSelection = btnScissors.textContent;
        const para = document.createElement('p');
        result.appendChild(para);
        para.textContent = round(caseSens(playerSelection),getComputerChoice());
        scoreTracker = score(para.textContent);
        playerScoreTracker.textContent = `${Number(playerScoreTracker.textContent) + scoreTracker[0]}`;
        computerScoreTracker.textContent = `${Number(computerScoreTracker.textContent) + scoreTracker[1]}`;
        if (playerScoreTracker.textContent == '5') {
            result.textContent = '';
            playerScoreTracker.textContent = '0';
            computerScoreTracker.textContent = '0';
            para.textContent = "Player has won!";
            result.appendChild(para);
        } else if (computerScoreTracker.textContent == '5') {
            result.textContent = '';
            playerScoreTracker.textContent = '0';
            computerScoreTracker.textContent = '0';
            para.textContent = "Player has won!";
            result.appendChild(para);
        }

    }); 

btnClear.addEventListener("click",() => {
    result.textContent = '';
    playerScoreTracker.textContent = '0';
    computerScoreTracker.textContent = '0';
});



