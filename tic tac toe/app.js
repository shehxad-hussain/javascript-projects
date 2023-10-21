const cells = Array.from(document.getElementsByClassName("cell"));
const restartBtn = document.getElementById("reset");
const statusText = document.getElementById("status");
const winnerText = document.getElementById("winner");

const winCons = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let moves = ["", "", "", "", "", "", "", "", ""];
let playing = true;
let player = "x";

startGame();

function startGame() {
  cells.forEach((cell) => cell.addEventListener("click", playerMove));
  restartBtn.addEventListener("click", resetGame);
  statusText.textContent = `${player}'s turn`;
  playing = true;
}

function playerMove() {
  const cellIndex = parseInt(this.getAttribute("cellindex"));

  if (moves[cellIndex] !== "" || !playing) {
    return;
  }

  const clickedCell = this;
  moveLogged(clickedCell, cellIndex);
  switchPlayer();
  winner();
}

function moveLogged(cell, index) {
  moves[index] = player;
  cell.textContent = player;
}

function switchPlayer() {
  player = player === "x" ? "o" : "x";
  statusText.textContent = `${player}'s turn`;
}

function winner() {
  for (let i = 0; i < winCons.length; i++) {
    const [a, b, c] = winCons[i];
    if (moves[a] !== "" && moves[a] === moves[b] && moves[b] === moves[c]) {
      playing = false;
      statusText.textContent = `${player === 'x' ? 'o' : 'x'} won!`;
      break;
    }
  }
  if (!playing) {
    cells.forEach((cell) => cell.removeEventListener("click", playerMove));
  } else if (moves.every((move) => move !== "")) {
    playing = false;
    statusText.textContent = "Draw!";
  }
}

function resetGame() {
    player = "x";
    moves = ["", "", "", "", "", "", "", "", ""];
    playing = true;
    statusText.textContent = `${player}'s turn`;
  
    const resetBtn = document.getElementById("reset");
    if (resetBtn) {
      resetBtn.addEventListener("click", resetGame);
    }
  
    cells.forEach((cell) => {
      cell.textContent = "";
      cell.addEventListener("click", playerMove);
    });
  }
