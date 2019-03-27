let start = document.querySelector('.start-btn');
let main = document.querySelector('main');
start.addEventListener('click', function(e){
  start.style.display = "none";
  main.style.display = "flex";
});

let playerScore = 0;
let compScore = 0;

document.querySelector('#player-score').innerHTML = playerScore;
document.querySelector('#comp-score').innerHTML = compScore;


function game() {
  console.log(playerScore);
}

/*Records choice then plays round*/
window.addEventListener('click', function(e){
  removeContent();
  let choice = e.srcElement.name;
  if (!choice) {
    return
  } else {
    playRound(choice, computerPlay())
  }
})

function computerPlay() {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
  let res = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return res;
}

function displayContent(text) {
  let container = document.querySelector('#text-content');
  let content = document.createElement('p');
  content.textContent = text;
  container.appendChild(content);
}

function removeContent() {
  let container = document.querySelector('#text-content');
  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}

function playRound(plySelect, comSelect) {
  if (plySelect === comSelect) {
    displayContent(`You chose ${capitalize(plySelect)}`);
    displayContent(`Computer chose ${capitalize(comSelect)}`);
    setTimeout(function() {
      displayContent("It's a Draw!");
    }, 2000);
  } else if (plySelect === "rock" && comSelect === "paper" ||
             plySelect === "paper" && comSelect === "scissors" ||
             plySelect === "scissors" && comSelect === "rock") {
    displayContent(`You chose ${capitalize(plySelect)}`);
    displayContent(`Computer chose ${capitalize(comSelect)}`);
    setTimeout(function() {
      displayContent(`You lose! ${capitalize(comSelect)} beats ${capitalize(plySelect)}`);
    }, 2000);
    compScore += 1;
    setTimeout(function() {
      document.querySelector('#comp-score').innerHTML = compScore;
    }, 3000);
  } else {
    displayContent(`You chose ${capitalize(plySelect)}`);
    displayContent(`Computer chose ${capitalize(comSelect)}`);
    setTimeout(function() {
      displayContent(`You win! ${capitalize(plySelect)} beats ${capitalize(comSelect)}`);
    }, 2000);
    playerScore += 1;
    setTimeout(function() {
      document.querySelector('#player-score').innerHTML = playerScore;
    }, 3000);
  }
}






// function answerBad(answer) {
//   if (answer === "rock" || answer === "paper" || answer === "scissors" ) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function game() {
//   let playerScore = 0;
//   let compScore = 0;
//
//   for (let i = 0; i < 5; i++) {
//     let answer = prompt("Rock, Paper or Scissors?");
//     answer = answer.toLowerCase();
//
//     while (answerBad(answer)) {
//       secAnswer = prompt("Incorrect value: You need to enter either 'rock', 'paper' or 'scissors'.");
//       answer = secAnswer.toLowerCase();
//     }
//
//     res = playRound(answer, computerPlay());
//     switch (res) {
//       case 1:
//         playerScore++;
//         break;
//       case -1:
//         compScore++;
//         break;
//     }
//     console.log(res);
//     console.log(`Current scores: Player = ${playerScore}, Computer = ${compScore}`);
//   }
//
//   if (playerScore > compScore) {
//     console.log("Congratulations, you win!");
//     console.log(`Final score: Player = ${playerScore}, Computer = ${compScore}`);
//   } else if (compScore > playerScore) {
//     console.log("Ah boo, you lose!");
//     console.log(`Final score: Player = ${playerScore}, Computer = ${compScore}`);
//   } else {
//     console.log("After all that it was a draw.");
//     console.log(`Final score: Player = ${playerScore}, Computer = ${compScore}`);
//   }
//
// }
