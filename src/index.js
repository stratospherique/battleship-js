import _ from 'lodash';
import './assets/css/main.scss';
import playerBoard from './DOMcontent';
import GameBoard from './gameBoard';
import Ship from './ships';

const game = GameBoard([Ship(1)]);
playerBoard.buildBoard(game.board);

