let humanScore = 0
let computerScore = 0


function getComputerChoice() {
    let result = Math.floor(Math.random() * 3)
    if (result === 0) {
        return "rock";
    } else if (result === 1) {
        return "paper";
    } else if (result === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Your choice?").toLowerCase()
    if (humanChoice === "rock") {
        return humanChoice
    } else if (humanChoice === "paper") {
        return humanChoice
    } else if (humanChoice === "scissors") {
        return humanChoice
    } else {
        return "Not a valid input :("
    }
}