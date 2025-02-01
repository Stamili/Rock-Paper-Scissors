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

function getplayerChoice() {
    let playerChoice = prompt("Your choice? (paper, rock, scissors)").toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } 
    else {
        return "Not a valid input :(";
    }
}

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

const playerSelection = getplayerChoice();
const computerSelection = getComputerChoice();
    
playRound(playerSelection, computerSelection);
   


