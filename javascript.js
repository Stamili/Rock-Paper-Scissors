let playerScore = 0;    
let computerScore = 0;

let computerChoice = "";
let playerChoice = "";

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
    computerChoice = "Rock";
    } 
    else if (result === 1) {
    computerChoice = "Paper";
    } 
    else if (result === 2) {
    computerChoice = "Scissors";
    }
    return computerChoice;
}

const buttons = document.querySelector("#buttons");
buttons.addEventListener('click', function(e) {
    computerChoice = getComputerChoice();

    switch(e.target.className) {
        case("R"):
        playerChoice = "Rock";
        break;
        case("P"):
        playerChoice = "Paper";
        break;
        case("S"):
        playerChoice = "Scissors";
    }
    
    playRound(playerChoice, computerChoice);
    choices.querySelector(".compChoice").textContent = "Computer choice: " + computerChoice;
    choices.querySelector(".playerChoice").textContent = "Your choice: " + playerChoice; 
    points.querySelector(".comp").textContent = "Computer: " + computerScore + "/5";
    points.querySelector(".player").textContent = "You: " + playerScore + "/5";
});


const results = document.querySelector("#results");
const points = document.querySelector("#points");
const choices = document.querySelector("#choices");

choices.querySelector(".compChoice").textContent = "Computer choice: " + computerChoice;
choices.querySelector(".playerChoice").textContent = "Your choice: " + playerChoice; 

points.querySelector(".comp").textContent = "Computer: " + computerScore + "/5";
points.querySelector(".player").textContent = "You: " + playerScore + "/5";

function playRound(playerChoice, computerChoice) {
    if (playerScore < 5 && computerScore < 5) {
        if (playerChoice === "Paper" && computerChoice === "Rock") {
            playerScore++;
            results.textContent = "You Win!";
        } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
            computerScore++;
            results.textContent = "You lose!";
        } else if (playerChoice === "Rock" && computerChoice === "Paper") {
            computerScore++;
            results.textContent = "You lose!";
        } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
            playerScore++;
            results.textContent = "You Win!";
        } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
            computerScore++;
            results.textContent = "You lose!";
        } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
            playerScore++;
            results.textContent = "You Win!";
        } else if (playerChoice === computerChoice) {
            results.textContent = "It's a tie!";
        }

        if (playerScore === 5) {
            results.textContent = "Congratulations! You won the game.";
        } else if (computerScore === 5) {
            results.textContent = "Oh! You lost the game :\\";
        }
    }
}


    

   


