import GameBoard from '../src/gameBoard';
import Ship from '../src/ships';

describe('testing the gameboard', () => {
  it('creates a 10X10 grid', () => {
    const ships = [Ship(1, ["A1"])]
    const game = GameBoard(ships);
    expect(game.board.length).toBe(10);
    expect(game.board[0].length).toBe(10);
  });

  it('places a battelship on the grid', () => {
    const ships = [Ship(1)];
    ships[0].position = ['A1'];
    const game = GameBoard(ships);
    game.placeShip(ships[0], game.board);
    game.recieveAttack(0, 0, ships, game.board);
    expect(game.board).toBe(0);
  })
})