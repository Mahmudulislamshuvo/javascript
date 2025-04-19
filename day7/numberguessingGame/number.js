const numgenbyPc = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function numbergessing() {
  const userNum = prompt("Guess the number (1 to 10)");
  const UserNumberFiltered = Number(userNum);

  if (isNaN(UserNumberFiltered) || UserNumberFiltered < 1) {
    alert("0 or invalid input not allowed");
    return console.log("Invalid input");
  }

  attempts++;

  if (UserNumberFiltered === numgenbyPc) {
    alert(`Wow! Yuu guess the Right number in ${attempts} attempts`);
    console.log("Winner! Attempt count:", attempts);
    const wantPlay = prompt("You want to play again Yes/No").toLowerCase();
    if (wantPlay === "yes") {
      numbergessing();
    } else {
      alert("Thank you for playing! See you soon");
    }
  } else if (UserNumberFiltered < numgenbyPc) {
    alert("too small, try again");
    numbergessing();
  } else {
    alert("too biggger, try again");
    numbergessing();
  }
}

numbergessing();
