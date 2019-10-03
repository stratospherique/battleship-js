import GameBoard from '../src/gameBoard';
import Ship from '../src/ships';

let game = null;
let realGame = null;
const smShipArray = [Ship(1)];
const realShipArray = [Ship(1), Ship(4), Ship(2), Ship(3)];

describe('testing the gameboard', () => {
  beforeEach(() => {
    game = GameBoard(smShipArray);
    realGame = GameBoard(realShipArray);
  });
  it('creates a 10X10 grid', () => {
    expect(game.board[0].length).toBe(10);
    expect(game.board.length).toBe(10);
  });

  it('places a array of ships on the grid "placeship"', () => {
    realGame.placeShip();
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
    expect(taken(realGame.board)).toBe(10);
  });

  it('report a play as a miss if no ship is targeted', () => {
    game.placeShip();
    game.board[0][0].state = 'empty';
    game.recieveAttack(0, 0);
    expect(game.board[0][0].state).toBe('miss');
  });

  it('report a play as a hit if a ship is targeted', () => {
    game.placeShip();
    const [x, y] = smShipArray[0].position[0].split('').map((e) => parseInt(e));
    game.recieveAttack(x, y);
    expect(game.board[x][y].state).toBe('hit');
  });

  it('returns true if all the ships are sunken', () => {
    realGame.placeShip();
    const allCordinates = [];
    realShipArray.forEach((ship) => {
      ship.position.forEach((coord) => {
        allCordinates.push(coord.split('').map((e) => parseInt(e)));
      });
    });
    allCordinates.forEach((coord) => {
      realGame.recieveAttack(coord[0], coord[1]);
    });
    // expect(realGame.gameOver()).toBeTruthy();
    expect(allCordinates).toBe(4);
  });
});