import GameBoard from '../src/gameBoard';

it.only('test a gameboard', () => {
  const board = GameBoard();
  console.log(board.grid);
});
