import _ from 'lodash';
import './assets/css/main.scss';
import computerBoard from './DOMcontent';
import GameBoard from './gameBoard';
import Ship from './ships';
import Player from './player';

const compGame = GameBoard([Ship(1), Ship(4), Ship(4)]);
compGame.placeShip();
const compPlayer = Player("Computer", "bot");
computerBoard.buildCompBoard(compGame);

const playerGame = Object.assign({}, GameBoard([Ship(1), Ship(4), Ship(4)]));
playerGame.placeShip();
const player = Player("Clarence", "Human");
computerBoard.buildPlayerBoard(playerGame);


// Game loop
let cord1 = 0;
let cord2 = 1;
let turn = true;

// Computer move

const compMove = () => {
  if (!turn) {
    const arr = compPlayer.play();
    const [crd1, crd2] = arr;
    arr.unshift('P');
    const div = document.getElementById(arr.join(''));
    console.log(playerGame.board[cord1][cord2]);
    playerGame.recieveAttack(crd1, crd2);
    console.log(playerGame.board[cord1][cord2]);
    computerBoard.changeCell(div, playerGame.board[cord1][cord2]);
    setTimeout(() => { turn = !turn; }, 1000)
  }
};

window.onclick = (e) => {
  if (turn) {
    if (e.target.classList.value.includes('bot')) {
      cord1 = parseInt(e.target.id.split('')[0]);
      cord2 = parseInt(e.target.id.split('')[1]);
    } else { return; }

    if (player.play(compGame.board[cord1][cord2])) {
      compGame.recieveAttack(cord1, cord2);
      computerBoard.changeCell(e.target, compGame.board[cord1][cord2]);
      turn = !turn;
      setTimeout(compMove, 2000);
    } else {
      alert('wrong move');
    }
  }

};
