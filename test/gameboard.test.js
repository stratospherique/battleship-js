import GameBoard from '../src/gameBoard';
import Ship from '../src/ships';

describe('testing the gameboard', () => {
  it('creates a 10X10 grid', () => {
    const ships = [Ship(1, ["A1"])]
    const game = GameBoard(ships);
    expect(game.board.length).toBe(10);
    expect(game.board[0].length).toBe(10);
  });

  it.only('places a battelship on the grid', () => {
    const ships = [Ship(4)];
    const game = GameBoard(ships);
    game.placeShip();
    const [x, y] = [parseInt(ships[0].position[0][0]), parseInt(ships[0].position[0][1])];
    //expect(game.board[x][y].state).toBe('taken');
    expect(game.board).toBe('taken');
  });

  it('places a array of ships on the grid', () => {
    const shipsArray = [Ship(4), Ship(3), Ship(3)];
    const game = GameBoard(shipsArray);
    game.placeShip();
    expect(game.board).toBe(0);
  })


})