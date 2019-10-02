import GameBoard from '../src/gameBoard';
import Ship from '../src/ships';

describe('testing the gameboard', () => {
  it('creates a 10X10 grid', () => {
    const ships = [Ship(1, ["A1"])]
    const game = GameBoard(ships);
    expect(game.board[0].length).toBe(10);
    expect(game.board.length).toBe(10);
  });

  it('places a array of ships on the grid', () => {
    const shipsArray = [Ship(4), Ship(3), Ship(3), Ship(2), Ship(2), Ship(2), Ship(1), Ship(1), Ship(1), Ship(1)];
    const game = GameBoard(shipsArray);
    game.placeShip();
    const taken = (board) => {
      let num = 0;
      board.forEach((row) => {
        row.forEach((column) => {
          if (column.state === 'taken') {
            num += 1;
          }
        });
      });
      return num;
    };
    expect(taken(game.board)).toBe(20);
  });
});
