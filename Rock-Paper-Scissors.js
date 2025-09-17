

function getComputerChoice() {
    let random = ((Math.random() * 15) + 1);

    if (random <= 5) {
        return "rock";
    } else if (random <= 10) {
        return "paper"
    } return "scissors";
}


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});



let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    const results = document.querySelector("#results");
    humanChoice = humanChoice.toLowerCase();
    let message = "";

    if (humanScore === 5 || computerScore === 5) return;

    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        message = "You win! " + humanChoice + " beats " + computerChoice;


    } else if (computerChoice === "rock" && humanChoice === "scissors" ||
        computerChoice === "paper" && humanChoice === "rock" ||
        computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        message = "You lose! " + computerChoice + " beats " + humanChoice;
    } else {
        message = "Draw! Both drew same hand";
    }


    let finalMessage = message;
    if (humanScore === 5) finalMessage += "\n Humans win the game!";
    else if (computerScore === 5) finalMessage += "\n Machines win the game!";

    results.textContent = `${finalMessage}\nScore: Human ${humanScore}, Computer: ${computerScore}`;
}

/*
 function playGame() {

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
} else 
    return "We are at a standstill, Draw!";
} */






