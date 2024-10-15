function getComputerChoice() {
    let result = Math.floor(Math.random() * 3)
    if (result === 0) {
        console.log("Rock")
    } else if (result === 1) {
        console.log("Paper")
    } else if (result === 2) {
        console.log("Scissors");
    }
}
