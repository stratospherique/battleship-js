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

const playerGame = GameBoard([Ship(1), Ship(4), Ship(4)]);
playerGame.placeShip();
const player = Player("Clarence", "Human");
computerBoard.buildPlayerBoard(playerGame.board);


// Game loop
let cord1 = 0;
let cord2 = 1;

window.onclick = e => {
  if (e.target.classList.value.includes('col')) {
    cord1 = parseInt(e.target.id.split('')[0]);
    cord2 = parseInt(e.target.id.split('')[1]);
  }
  compGame.recieveAttack(cord1, cord2);
  computerBoard.buildCompBoard(compGame);
  setInterval(() => {
    playerGame
  }, 2000)
}

