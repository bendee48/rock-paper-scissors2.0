
let playerScore = 0;
let compScore = 0;
let start = document.querySelector('.start-btn');
let main = document.querySelector('main');
let scorePanel = document.querySelector('#scores');
let endBtn = document.querySelector('.end-btn');
let container = document.querySelector('#text-content');

document.querySelector('#player-score').innerHTML = playerScore;
document.querySelector('#comp-score').innerHTML = compScore;

playGame();

function playGame() {
  start.addEventListener('click', function(e){
    start.style.display = "none";
    main.style.display = "flex";
    scorePanel.style.display = "flex";
  });
  selectChoice();
}

function endGame() {
  main.style.display = "none";
  endBtn.style.display = "block";
  container.style.display = "none";
  endBtn.addEventListener('click', function() {
    window.location.reload(false);
  });
}

function selectChoice() {
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
}

function computerPlay() {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
  let res = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return res;
}

function displayContent(text) {
  let content = document.createElement('p');
  content.textContent = text;
  if (text.includes("!")) {
    content.style.fontSize = "1.5em";
    content.style.fontWeight = "bold";
    content.style.fontStyle = "italic";
  }
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
    }, 1000);
  } else if (plySelect === "rock" && comSelect === "paper" ||
             plySelect === "paper" && comSelect === "scissors" ||
             plySelect === "scissors" && comSelect === "rock") {
    displayContent(`You chose ${capitalize(plySelect)}`);
    displayContent(`Computer chose ${capitalize(comSelect)}`);
    setTimeout(function() {
      displayContent(`You lose! ${capitalize(comSelect)} beats ${capitalize(plySelect)}`);
    }, 1000);
    compScore += 1;
    setTimeout(function() {
      document.querySelector('#comp-score').innerHTML = compScore;
    }, 2000);
    if (compScore == 5) {
      setTimeout(function() {
        endGame();
      }, 3000);
    }
  } else {
    displayContent(`You chose ${capitalize(plySelect)}`);
    displayContent(`Computer chose ${capitalize(comSelect)}`);
    setTimeout(function() {
      displayContent(`You win! ${capitalize(plySelect)} beats ${capitalize(comSelect)}`);
    }, 1000);
    playerScore += 1;
    setTimeout(function() {
      document.querySelector('#player-score').innerHTML = playerScore;
    }, 2000);
    if (playerScore == 5) {
      setTimeout(function() {
        endGame();
      }, 3000);
    }
  }
}
