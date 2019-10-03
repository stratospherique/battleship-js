import GameBoard from '../src/gameBoard';
import Ship from '../src/ships';

describe('testing the gameboard', () => {
  let game
  beforeEach(() => {
    game = GameBoard([Ship(1)])
  })
  it('creates a 10X10 grid', () => {
    expect(game.board[0].length).toBe(10);
    expect(game.board.length).toBe(10);
  });

  it('places a array of ships on the grid "placeship"', () => {
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
    expect(taken(game.board)).toBe(1);
  });

  it('report a play as a miss if no ship is targeted', () => {
    game.placeShip();
    game.board[0][0].state = 'empty'
    game.recieveAttack(0, 0);
    expect(game.board[0][0].state).toBe('miss');
  })

  it('report a play as a hit if a ship is targeted', () => {
    const shipsArray = [Ship(1)];
    const gamez = GameBoard(shipsArray);
    gamez.placeShip();
    const [x, y] = shipsArray[0].position[0].split('').map(e => parseInt(e));
    gamez.recieveAttack(x, y);
    expect(gamez.board[x][y].state).toBe('hit');
  })

  it('returns true if all the ships are sunken', () => {
    const shipsArray = [Ship(1)];
    const gamez = GameBoard(shipsArray);
    gamez.placeShip();
    const [x, y] = shipsArray[0].position[0].split('').map(e => parseInt(e));
    gamez.recieveAttack(x, y);
    expect(gamez.gameOver).toBeTruthy();
  })

});

