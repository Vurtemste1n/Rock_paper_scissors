function getComputerChoice() {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
    let n = 3;
    let choice = '';
    let randNum = Math.floor(Math.random()*(n+1));
    if (randNum == 0) {
        choice = '✊';
    } else if (randNum == 1) {
        choice = '✋';
    } else choice = '✌';
    return choice;
}
function round(playerSelection,computerSelection) {
    let message = "";
    if (computerSelection == playerSelection) {
        message = ('You are even!');
    } else if (playerSelection == "✋" && computerSelection == "✊") {
        message = (firstLetter(playerSelection) + " beats " + computerSelection + ". You win!");
    } else if (playerSelection == "✊" && computerSelection == "✌") {
        message = (firstLetter(playerSelection) + " beats " + computerSelection + ". You win!");
    } else if (playerSelection == "✌" && computerSelection == "✋") {
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
    const playerChoice = document.querySelector(".player-choice");
    const computerChoice = document.querySelector(".computer-choice");
    playerScoreTracker.textContent = "0";
    computerScoreTracker.textContent = "0";
    let scoreTracker; 
    const para = document.createElement('p');
    result.appendChild(para);
    btnRock.addEventListener("click",() => {
        computerChoice.textContent = getComputerChoice();
        playerChoice.textContent = '✊';
        playerSelection = btnRock.textContent;
        result.classList.remove('green-para');
        result.classList.remove('red-para');
        para.textContent = round(playerSelection,computerChoice.textContent);
        scoreTracker = score(para.textContent);
        playerScoreTracker.textContent = `${Number(playerScoreTracker.textContent) + scoreTracker[0]}`;
        computerScoreTracker.textContent = `${Number(computerScoreTracker.textContent) + scoreTracker[1]}`;
            if (playerScoreTracker.textContent == '5') {
                result.textContent = '';
                playerScoreTracker.textContent = '0';
                computerScoreTracker.textContent = '0';
                para.textContent = "Player has won!";
                result.appendChild(para);
                result.classList.add("green-para");
            } else if (computerScoreTracker.textContent == '5') {
                result.textContent = '';
                playerScoreTracker.textContent = '0';
                computerScoreTracker.textContent = '0';
                para.textContent = "Computer has won!";
                result.appendChild(para);
                result.classList.add("red-para");

            }
    });
    btnPaper.addEventListener("click",() => {
        computerChoice.textContent = getComputerChoice();
        playerChoice.textContent = '✋';
        result.classList.remove('green-para');
        result.classList.remove('red-para');
        playerSelection = btnPaper.textContent;
        para.textContent = round(caseSens(playerSelection),computerChoice.textContent);
        scoreTracker = score(para.textContent);
        playerScoreTracker.textContent = `${Number(playerScoreTracker.textContent) + scoreTracker[0]}`;
        computerScoreTracker.textContent = `${Number(computerScoreTracker.textContent) + scoreTracker[1]}`;
        if (playerScoreTracker.textContent == '5') {
            result.textContent = '';
            playerScoreTracker.textContent = '0';
            computerScoreTracker.textContent = '0';
            para.textContent = "Player has won!";
            result.appendChild(para);
            result.classList.add("green-para");
        } else if (computerScoreTracker.textContent == '5') {
            result.textContent = "";
            playerScoreTracker.textContent = '0';
            computerScoreTracker.textContent = '0';
            para.textContent = "Computer has won!";
            result.appendChild(para);
            result.classList.add("red-para");

        }

    });
        btnScissors.addEventListener("click",() => {
        computerChoice.textContent = getComputerChoice();
        playerChoice.textContent = '✌';
        result.classList.remove('green-para');
        result.classList.remove('red-para');    
        playerSelection = btnScissors.textContent;
        para.textContent = round(playerChoice.textContent,computerChoice.textContent);
        scoreTracker = score(para.textContent);
        playerScoreTracker.textContent = `${Number(playerScoreTracker.textContent) + scoreTracker[0]}`;
        computerScoreTracker.textContent = `${Number(computerScoreTracker.textContent) + scoreTracker[1]}`;
        if (playerScoreTracker.textContent == '5') {
            result.textContent = '';
            playerScoreTracker.textContent = '0';
            computerScoreTracker.textContent = '0';
            para.textContent = "Player has won!";
            result.appendChild(para);
            result.classList.add("green-para");
        } else if (computerScoreTracker.textContent == '5') {
            result.textContent = '';
            playerScoreTracker.textContent = '0';
            computerScoreTracker.textContent = '0';
            para.textContent = "Computer has won!";
            result.appendChild(para);
            result.classList.add("red-para");
        }

    }); 

btnClear.addEventListener("click",() => {
    para.textContent = '';
    playerScoreTracker.textContent = '0';
    computerScoreTracker.textContent = '0';
    playerChoice.textContent = "";
    computerChoice.textContent = "";
});



