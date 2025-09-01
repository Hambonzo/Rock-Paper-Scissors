

function getComputerChoice() {
    let random = ((Math.random() * 15) + 1);

    if (random <= 5) {
        return "rock";
    } else if (random <= 10) {
        return "paper"
    } return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("What hand do you play?", "");

    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    }
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        let winner = "You win " + humanChoice + " beats " + computerChoice + "!";
        let loser = "You lose " + computerChoice + " beats " + humanChoice + " :(";

        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper") {
            return ++humanScore;


        } else if (computerChoice === "rock" && humanChoice === "scissors" ||
            computerChoice === "paper" && humanChoice === "rock" ||
            computerChoice === "scissors" && humanChoice === "paper") {
            return ++computerScore;


        } return "Both drew the same hand, score remains the same";
    }

    for (let i = 1; i <= 5; i++) {
        console.log("Round: " + i + " fight!");
        let humanChoice = getHumanChoice();
        console.log("Humans chose: " + humanChoice);
        let computerChoice = getComputerChoice();
        console.log("Machines chose: " + computerChoice);
        playRound(humanChoice, computerChoice);
        console.log("Humans: " + humanScore + ", Machines: " + computerScore);

    } if (humanScore > computerScore) {
        return "Humanity wins!";
    } else if (humanScore < computerScore) {
        return "The machines win!";
    } else "We are at a standstill, Draw!";
}