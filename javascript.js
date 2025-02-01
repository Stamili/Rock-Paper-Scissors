console.log("Welcome!");

let humanScore = 0;    
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

function getHumanChoice() {
    let humanChoice = prompt("Your choice? (paper, rock, scissors)").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } 
    else {
        return "Not a valid input :(";
    }
}

function playRound(humanChoice, computerChoice) {
    console.log("You : " + humanChoice);
    console.log("Computer : " + computerChoice);
    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You won! paper beats rock!");
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You lost, scissors beats paper");
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You lost, paper beats rock!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You won! rock beats scissors!");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You lost, rock beats scissors!");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You won! scissors beats paper");
    }
    else if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else {
        console.log("Something went wrong...");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
    
playRound(humanSelection, computerSelection);
   


