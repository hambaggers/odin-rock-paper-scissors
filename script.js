function getComputerChoice() {
  var choice = ["Rock", "Paper", "Scissors", "Gun"];
  var random = Math.floor(Math.random() * choice.length);
  var randomChoice = choice[random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("DRAW! Try again.");
    if (playerSelection == "Rock" && computerSelection == "Paper") {
      console.log("YOU LOSE! Paper beats rock. Nothing personal.");
    } else if (computerSelection == "Scissors") {
      console.Log(
        "YOU WIN! Rock beats Scissors. Take that science and engineering!"
      );
    }
    if (playerSelection == "Paper" && computerSelection == "Rock") {
      console.log("YOU WIN! Paper beats rock. Just hide all your problems");
    } else if (computerSelection == "Scissors") {
      console.Log(
        "YOU LOSE! Scissors beats paper. At least you have reinforcements against rock."
      );
    }
    if (playerSelection == "Scissors" && computerSelection == "Rock") {
      console.log("YOU LOSE! Rock beats scissors. ");
    } else if (computerSelection == "Paper") {
      console.Log("YOU WIN! Scissors beats paper. That's a wrap!");
    }
  }
  if (computerSelection == "Gun") {
    console.log("BANG! You lose... sorry, the game was rigged from the start.");
  } else if (playerSelection == "Gun") {
    console.log("I can't let you do that...");
  }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
