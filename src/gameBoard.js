import Ship from "./ships";

const gridT = ['0123456789', '0123456789'];

const grid = new Array(10);
gridT[0].split('').forEach((item, i) => {
  grid[i] = [];
  gridT[1].split('').forEach((suItem) => {
    grid[i].push({
      pos: `${item}${suItem}`,
      // status: taken/empty/hit/miss
      state: 'empty',
    });
  });
});


const GameBoard = (ships) => {
  const board = grid;
  const validPosition = (ship, coord, facing) => {
    const cordH = parseInt(coord.pos[1]);
    const cordV = parseInt(coord.pos[0]);
    if (facing === 'horizontal') {
      for (let j = cordH; j <= cordH + ship.length - 1; j++) {
        if (!board[cordV][j] || board[cordV][j].state !== 'empty') {
          return false;
        }
      }
    } else {
      for (let i = cordV; i <= cordV + ship.length - 1; i++) {
        if (!board[i] || board[i][cordH].state !== 'empty') {
          return false;
        }
      }
    }
    return true;
  };

  return {
    validPosition,
    board,
    placeShip: () => {
      //const board = brd;
      ships.map((ship) => {
        let [randomH, randomV] = [0, 0];
        let coord = '';
        const facing = ['horizontal', 'vertical'];
        let dir = 0;
        do {
          randomH = Math.round(Math.random() * 9);
          randomV = Math.round(Math.random() * 9);
          coord = board[randomV][randomH];
          dir = Math.round(Math.random() * 1);
        } while (!validPosition(ship, coord, facing[dir]));
        if (facing[dir] === 'horizontal') {
          for (let i = randomH; i <= randomH + ship.length - 1; i++) {
            board[randomV][i].state = 'taken';
            ship.position.push(board[randomV][i].pos);
          }
        }
        if (facing[dir] === 'vertical') {
          for (let i = randomV; i <= randomV + ship.length - 1; i++) {
            board[i][randomH].state = 'taken';
            ship.position.push(board[i][randomH].pos);
          }
        }
        return ship;
      });
    },
    recieveAttack: (coord1, coord2, ships) => {
      const bomb = board[coord1][coord2];
      const position = bomb.pos;
      const ship = ships.filter((e) => e.position.includes(position))[0];
      if (ship) {
        ship.hit();
        bomb.state = 'hit';
      } else {
        bomb.state = 'miss';
      }
    },
  }
};

export default GameBoard;

[[{ "pos": "00", "state": "empty" }, { "pos": "01", "state": "empty" }, { "pos": "02", "state": "empty" }, { "pos": "03", "state": "empty" },
  { "pos": "04", "state": "empty" }, { "pos": "05", "state": "empty" }, { "pos": "06", "state": "empty" }, { "pos": "07", "state": "empty" },
  { "pos": "08", "state": "empty" }, { "pos": "09", "state": "empty" }], [{ "pos": "10", "state": "taken" }, { "pos": "11", "state": "empty" }, { "pos": "12", "state": "empty" }, { "pos": "13", "state": "empty" }, { "pos": "14", "state": "empty" }, { "pos": "15", "state": "empty" },
  { "pos": "16", "state": "empty" }, { "pos": "17", "state": "empty" }, { "pos": "18", "state": "empty" }, { "pos": "19", "state": "empty" }], [{ "pos": "20", "state": "taken" }, { "pos": "21", "state": "empty" }, { "pos": "22", "state": "empty" }, { "pos": "23", "state": "empty" }, { "pos": "24", "state": "empty" }, { "pos": "25", "state": "empty" }, { "pos": "26", "state": "empty" }, { "pos": "27", "state": "empty" }, { "pos": "28", "state": "empty" }, { "pos": "29", "state": "empty" }], [{ "pos": "30", "state": "taken" }, { "pos": "31", "state": "empty" }, { "pos": "32", "state": "empty" }, { "pos": "33", "state": "empty" }, { "pos": "34", "state": "empty" }, { "pos": "35", "state": "empty" }, { "pos": "36", "state": "empty" }, { "pos": "37", "state": "empty" }, { "pos": "38", "state": "empty" }, { "pos": "39", "state": "taken" }], [{ "pos": "40", "state": "empty" }, { "pos": "41", "state": "empty" }, { "pos": "42", "state": "empty" }, { "pos": "43", "state": "empty" }, { "pos": "44", "state": "empty" }, { "pos": "45", "state": "empty" }, { "pos": "46", "state": "empty" }, { "pos": "47", "state": "empty" }, { "pos": "48", "state": "empty" }, { "pos": "49", "state": "taken" }], [{ "pos": "50", "state": "empty" }, { "pos": "51", "state": "empty" }, { "pos": "52", "state": "empty" }, { "pos": "53", "state": "empty" }, { "pos": "54", "state": "empty" }, { "pos": "55", "state": "empty" }, { "pos": "56", "state": "empty" }, { "pos": "57", "state": "empty" }, { "pos": "58", "state": "empty" }, { "pos": "59", "state": "taken" }], [{ "pos": "60", "state": "empty" }, { "pos": "61", "state": "taken" }, { "pos": "62", "state": "empty" }, { "pos": "63", "state": "empty" }, { "pos": "64", "state": "empty" }, { "pos": "65", "state": "empty" }, { "pos": "66", "state": "empty" }, { "pos": "67", "state": "empty" }, { "pos": "68", "state": "empty" }, { "pos": "69", "state": "taken" }], [{ "pos": "70", "state": "empty" }, { "pos": "71", "state": "taken" }, { "pos": "72", "state": "empty" }, { "pos": "73", "state": "empty" }, { "pos": "74", "state": "taken" }, { "pos": "75", "state": "taken" }, { "pos": "76", "state": "taken" }, { "pos": "77", "state": "empty" }, { "pos": "78", "state": "empty" }, { "pos": "79", "state": "empty" }], [{ "pos": "80", "state": "empty" }, { "pos": "81", "state": "taken" }, { "pos": "82", "state": "empty" }, { "pos": "83", "state": "empty" }, { "pos": "84", "state": "empty" }, { "pos": "85", "state": "empty" }, { "pos": "86", "state": "empty" }, { "pos": "87", "state": "empty" }, { "pos": "88", "state": "empty" }, { "pos": "89", "state": "empty" }], [{ "pos": "90", "state": "empty" }, { "pos": "91", "state": "taken" }, { "pos": "92", "state": "empty" }, { "pos": "93", "state": "empty" }, { "pos": "94", "state": "empty" }, { "pos": "95", "state": "empty" }, { "pos": "96", "state": "empty" }, { "pos": "97", "state": "empty" }, { "pos": "98", "state": "empty" }, { "pos": "99", "state": "empty" }]]