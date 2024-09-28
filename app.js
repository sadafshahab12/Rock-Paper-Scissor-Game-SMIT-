let choices = document.querySelectorAll(".images");
let msg = document.querySelector(".msg");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

function computerChoice() {
  let choices = ["rock", "paper", "scissor"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playGame(userChoice) {
  let compChoice = computerChoice();

  if (userChoice === compChoice) {
    msg.innerText = "Game Draw. Play Again";
    msg.style.backgroundColor = "purple";
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}


function showWinner(userWin, userChoice, compChoice) {
  if (userWin === true) {
    


    msg.innerText = `Congratulation! You Win.\n Your ${userChoice} beat the  Computer Choice: ${compChoice} `;
    msg.style.backgroundColor = "Green";
  } else {
    msg.innerText = `You Loss! \n Computer Choice: ${compChoice}  beat your ${userChoice} `;
    msg.style.backgroundColor = "red";
  }
}
