function rpsGame() {
  let computerChoise = Math.floor(Math.random() * 3) + 1;

  if (computerChoise === 1) {
    computerChoise = "rock";
  } else if (computerChoise === 2) {
    computerChoise = "paper";
  } else {
    computerChoise = "scissors";
  }

  let userChoicePromt = prompt("Choice from these  = Rock, Paper, Scissors");
  const userChoice = userChoicePromt.toLowerCase();

  if (
    (userChoice === "rock" && computerChoise === "scissors") ||
    (userChoice === "paper" && computerChoise === "rock") ||
    (userChoice === "scissors" && computerChoise === "paper")
  ) {
    alert("Yaaaaa User Win that match");
  } else if (
    (userChoice === "rock" && computerChoise === "paper") ||
    (userChoice === "paper" && computerChoise === "scissors") ||
    (userChoice === "scissors" && computerChoise === "rock")
  ) {
    alert("Yaaaaa Computer defeat you");
  } else if (userChoice === computerChoise) {
    alert("It's a tie try again");
  } else {
    alert("Something wrong here try again");
  }

  const PlayAgain = prompt("Do you want to pay again? Yes/No");
  const IsPlayAgain = PlayAgain ? PlayAgain.toLowerCase() : "no";

  if (IsPlayAgain === "yes") {
    rpsGame();
  } else {
    alert("Thank you for playing");
  }
}

rpsGame();
