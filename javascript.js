let choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    while(!i){
        var i = prompt("Enter your choice\n1 => Rock\n2 => Paper\n3 => Scissors");
    }
    let choice = parseInt(i);
    if(choice < 1 || choice > 3){
        alert("Invalid Choice");
        return getHumanChoice();
    }
    else{
        return choices[choice - 1];
    }
}

function playGame() {
    function playRound(getHumanChoice, getComputerChoice) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if((humanChoice == "Rock" && computerChoice == "Scissors") ||
            (humanChoice == "Scissors" && computerChoice == "Paper") ||
            (humanChoice == "Paper" && computerChoice == "Rock")) {
                return 1;
        }
        else if(humanChoice == computerChoice){
            return 0;
        }
        else{
            return -1;
        }

    }  

    // play 5 rounds
    for(let i=0;i<5;i++){
        let res = playRound(getHumanChoice, getComputerChoice);
        if(res == 1){
            humanScore++;
            alert("You Won");
        }
        else if(res == 0){
            alert("It's a draw");
        }
        else{
            computerScore++;
            alert("Computer Won");
        }
        if(humanScore == 3 || computerScore == 3){
            break;
        }
    }

    if(humanScore > computerScore){
        alert("Congratulations! You are the Winner");
    }
    else if(humanScore < computerScore){
        alert("LMAO you are the Loser!");
    }
    else{
        alert("Nobody won");
    }
}

// playGame();

