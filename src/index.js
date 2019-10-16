import _ from 'lodash';
import './assets/css/main.scss';
import computerBoard from './DOMcontent';
import GameBoard from './gameBoard';
import Ship from './ships';

const compGame = GameBoard([Ship(1), Ship(4), Ship(4)]);
compGame.placeShip();
computerBoard.buildCompBoard(compGame.board);

const playerGame = GameBoard([Ship(1), Ship(4), Ship(4)]);
playerGame.placeShip();
computerBoard.buildPlayerBoard(playerGame.board);
