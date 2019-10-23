import "./assets/css/main.scss";
import computerBoard from "./DOMcontent";
import GameBoard from "./gameBoard";
import Ship from "./ships";
import Player from "./player";

let compGame = null;
let playerGame = null;
const compPlayer = Player("Computer", "bot");
const player = Player("Clarence", "Human");
const shipPlayer = [Ship(2), Ship(1), Ship(3), Ship(4)];
const shipComp = [Ship(2), Ship(1), Ship(3), Ship(4)];
let turn;
let plHits;
let cpHits;
// Game loop

const gameStart = () => {
  compPlayer.initMoves();
  player.initMoves();
  compGame = GameBoard(shipComp);
  compGame.placeShip();
  computerBoard.buildCompBoard(compGame);

  playerGame = GameBoard(shipPlayer);
  playerGame.placeShip();
  computerBoard.buildPlayerBoard(playerGame);
  turn = true;
  plHits = 0;
  cpHits = 0;
  computerBoard.updateBanner(true, 0);
  computerBoard.updateBanner(false, 0);
};

gameStart();

// Computer move
const compMove = () => {
  if (!turn) {
    const arr = compPlayer.play();
    const [crd1, crd2] = arr;
    arr.unshift("P");

    const div = document.getElementById(arr.join(""));
    playerGame.recieveAttack(crd1, crd2);
    cpHits = playerGame.sunkedShips();
    computerBoard.updateBanner(turn, cpHits);

    computerBoard.changeCell(div, playerGame.board[crd1][crd2]);
    setTimeout(() => {
      turn = !turn;
    }, 1000);
    if (playerGame.gameOver()) {
      computerBoard.wrapper.innerHTML = computerBoard.computerWin;
      document.querySelector(".gameStart").addEventListener("click", refresh);
      return;
    }
  }
};

const refresh = () => {
  window.location.reload(false);
};

window.onclick = e => {
  let cord1 = 0;
  let cord2 = 1;
  if (turn) {
    if (e.target.classList.value.includes("bot")) {
      cord1 = parseInt(e.target.id.split("")[0]);
      cord2 = parseInt(e.target.id.split("")[1]);
    } else {
      return;
    }
    if (player.play(compGame.board[cord1][cord2])) {
      compGame.recieveAttack(cord1, cord2);
      computerBoard.changeCell(e.target, compGame.board[cord1][cord2]);
      plHits = compGame.sunkedShips();
      computerBoard.updateBanner(turn, plHits);
      computerBoard.worngMoveInd.classList.value = 'invalid hide';
      turn = !turn;
      if (compGame.gameOver()) {
        computerBoard.wrapper.innerHTML = computerBoard.playerWin;
        document.querySelector(".gameStart").addEventListener("click", refresh);
        return;
      }
      setTimeout(compMove, 1500);
    } else {
      computerBoard.worngMoveInd.classList.remove('hide');
    }
  }
};
