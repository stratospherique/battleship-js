import GameBoard from '../src/gameBoard';
import Ship from '../src/ships';

describe('testing the gameboard', () => {
  it.only('creates a 10X10 grid', () => {
    const ships = []
    const game = GameBoard();
    expect(game.board.length).toBe(10);
    expect(game.board[0].length).toBe(10);
  });
})