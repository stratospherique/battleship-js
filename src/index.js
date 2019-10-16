import _ from 'lodash';
import './assets/css/main.scss';
import computerBoard from './DOMcontent';
import GameBoard from './gameBoard';
import Ship from './ships';
import Player from './player';

const compGame = GameBoard([Ship(1), Ship(4), Ship(4)]);
compGame.placeShip();
const compPlayer = Player("Computer", "bot");
computerBoard.buildCompBoard(compGame.board);

const playerGame = GameBoard([Ship(1), Ship(4), Ship(4)]);
playerGame.placeShip();
const player = Player("Clarence", "Human");
computerBoard.buildPlayerBoard(playerGame.board);

// Game loop
let turn = false;
while (!playerGame.gameOver()) {
  turn = !turn;
  if (turn) {
    compGame.recieveAttack(player.play())
  } else {
    playerGame.recieveAttack(compPlayer.play())
  }
}
