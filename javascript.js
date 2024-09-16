let choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0, computerScore = 0;

let nextRound = true, gameover = false;

let startButton = document.querySelector(".btn-start");
let declareText = document.querySelector(".declare-text");

let btnRock = document.querySelector(".btn-rock");
let btnPaper = document.querySelector(".btn-paper");
let btnScissors = document.querySelector(".btn-scissors");

let btnStart = document.querySelector(".btn-start");

btnRock.addEventListener("click", (e) => {
    playRound("Rock", e.target);
});

btnPaper.addEventListener("click", (e) => {
    playRound("Paper", e.target);
});

btnScissors.addEventListener("click", (e) => {
    playRound("Scissors", e.target);
});

btnStart.addEventListener("click", (e) => {
    if(!nextRound){
        nextRound = true;
        btnRock.setAttribute("style", "background-color : #f0f0f0");
        btnPaper.setAttribute("style", "background-color : #f0f0f0");
        btnScissors.setAttribute("style", "background-color : #f0f0f0");
    }
    if(gameover){
        resetGame();
    }
});



function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function resetGame() {
    gameover = false;
    declareText.innerText = "";
    startButton.innerText = "Start";
    humanScore = computerScore = 0;
    updateScore();
}

function updateScore() {
    let playerDisplay = document.querySelector(".player-score");
    let computerDisplay = document.querySelector(".computer-score");

    playerDisplay.innerText = `Player : ${humanScore}`;
    computerDisplay.innerText = `Computer : ${computerScore}`;
}


function playRound(humanChoice, btn) {
    if(!nextRound) return;
    startButton.innerText = "Next Round";
    nextRound = false;

    
    let computerChoice = getComputerChoice();
    let feedbox = document.querySelector("#feed-box");
    feedbox.innerText = `Computer chose ${computerChoice}`;

    if((humanChoice == "Rock" && computerChoice == "Scissors") ||
        (humanChoice == "Scissors" && computerChoice == "Paper") ||
        (humanChoice == "Paper" && computerChoice == "Rock")) {
            humanScore++;
            btn.setAttribute("style", "background-color : green");
            
    }
    else if(humanChoice == computerChoice){
        btn.setAttribute("style", "background-color : grey");
        
    }
    else{
        computerScore++;
        btn.setAttribute("style", "background-color : red");
        
    }

    updateScore();

    if(humanScore == 3 || computerScore == 3){
        if(humanScore > computerScore){
            declareText.innerText = "Congratulations! You are the Winner";
        }
        else{
            declareText.innerText = "LMAO you are the Loser!";
        }
        gameover = true;
        startButton.innerText = "Play Again";
    }
}  





