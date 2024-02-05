function getComputerChoice() {
  var choice = ["Rock", "Paper", "Scissors", "Gun"];
  var random = Math.floor(Math.random() * choice.length);
  var randomChoice = choice[random];
}

function playRound(playerSelection, computerSelection) {}

const playerSelection = "rock";

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
