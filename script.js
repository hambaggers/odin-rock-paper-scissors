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
    return "YOU WIN! " + playerSelection + " beats " + computerSelection;
  } else if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
    return "YOU LOSE! " + computerSelection + " beats " + playerSelection;
  }
}

function playGame(playRound) {
  for (i = 0; i < 5; i++) {
    playRound();
  }
  console.log(playRound(playerSelection, computerSelection));
}

const playerSelection = prompt("Rock, Paper, or Scissors?");
const computerSelection = getComputerChoice();
console.log(playGame(playRound));
