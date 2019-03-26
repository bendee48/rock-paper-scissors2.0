let start = document.querySelector('.start-btn');
let main = document.querySelector('main');
start.addEventListener('click', function(e){
  start.style.display = "none";
  main.style.display = "flex";
});

function computerPlay() {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
  let res = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return res;
}

function playRound(plySelect, comSelect) {
  plySelect = plySelect.toLowerCase();

  if (plySelect === comSelect) {
    console.log("It's a Draw!");
    return 0;
  } else if (plySelect === "rock" && comSelect === "paper" ||
             plySelect === "paper" && comSelect === "scissors" ||
             plySelect == "scissors" && comSelect === "rock") {
    console.log(`You lose! ${capitalize(comSelect)} beats ${capitalize(plySelect)}`);
    return -1;
  } else {
    console.log(`You win ${capitalize(plySelect)} beats ${capitalize(comSelect)}`);
    return 1;
  }

}

function answerBad(answer) {
  if (answer === "rock" || answer === "paper" || answer === "scissors" ) {
    return false;
  } else {
    return true;
  }
}

function game() {
  let playerScore = 0;
  let compScore = 0;

  for (let i = 0; i < 5; i++) {
    let answer = prompt("Rock, Paper or Scissors?");
    answer = answer.toLowerCase();

    while (answerBad(answer)) {
      secAnswer = prompt("Incorrect value: You need to enter either 'rock', 'paper' or 'scissors'.");
      answer = secAnswer.toLowerCase();
    }

    res = playRound(answer, computerPlay());
    switch (res) {
      case 1:
        playerScore++;
        break;
      case -1:
        compScore++;
        break;
    }
    console.log(res);
    console.log(`Current scores: Player = ${playerScore}, Computer = ${compScore}`);
  }

  if (playerScore > compScore) {
    console.log("Congratulations, you win!");
    console.log(`Final score: Player = ${playerScore}, Computer = ${compScore}`);
  } else if (compScore > playerScore) {
    console.log("Ah boo, you lose!");
    console.log(`Final score: Player = ${playerScore}, Computer = ${compScore}`);
  } else {
    console.log("After all that it was a draw.");
    console.log(`Final score: Player = ${playerScore}, Computer = ${compScore}`);
  }

}
