let playerScore = 0;
let computerScore = 0;

function getComputerChoice(randomChoice) {
  var choice = ["Rock", "Paper", "Scissors"];
  var random = Math.floor(Math.random() * choice.length);
  var randomChoice = choice[random];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "DRAW! Try again.";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++;
    return "YOU WIN! " + playerSelection + " beats " + computerSelection;
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    computerScore++;
    return "YOU LOSE! " + computerSelection + " beats " + playerSelection;
  }
}

function playGame(playRound) {
  do {
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (computerScore === 5) {
      console.log("You lost the game. Try again.");
    }
    if (playerScore === 5) {
      console.log("Congrats you won!");
    }
  } while (playerScore != 5 || computerScore != 5);
}

console.log(playGame(playRound));
