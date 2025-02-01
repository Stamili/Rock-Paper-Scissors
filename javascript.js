console.log("Welcome!");

let playerScore = 0;    
let computerScore = 0;

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    let computerChoice;
    if (result === 0) {
    computerChoice = "rock";
    } 
    else if (result === 1) {
    computerChoice = "paper";
    } 
    else if (result === 2) {
    computerChoice = "scissors";
    }
    return computerChoice;
}

const buttons = document.querySelector("#buttons");
buttons.addEventListener('click', function(e) {
    let playerSelection;
    let computerSelection = getComputerChoice();

    switch(e.target.className) {
        case("R"):
        playerSelection = "rock";
        break;
        case("P"):
        playerSelection = "paper";
        break;
        case("S"):
        playerSelection = "scissors";
    }
    
    playRound(playerSelection, computerSelection);
});






function playRound(playerChoice, computerChoice) {
    console.log("You : " + playerChoice);
    console.log("Computer : " + computerChoice);
    if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        console.log("You won! paper beats rock!");
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You lost, scissors beats paper");
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You lost, paper beats rock!");
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        console.log("You won! rock beats scissors!");
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You lost, rock beats scissors!");
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        console.log("You won! scissors beats paper");
    }
    else if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else {
        console.log("Something went wrong...");
    }
}


    

   


