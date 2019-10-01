const gridT = [
  'ABCDEFGHIJ',
  '0123456789',
]

const grid = new Array(10);
gridT[0].split('').forEach((item, i) => {
  tmp[i] = [];
  gridT[1].split('').forEach((suItem) => {
    grid[i].push({
      pos: `${item}${suItem}`,
      state: 'empty',
    });
  });
});

const GameBoard = () => ({
  board: grid,
  validPosition: (ship, coord, facing, board) => {
    let valid = true;
    const cordNum = parseInt(coord.pos.split('')[1]);
    const cordV = gridT[0].indexOf(coord.pos.split('')[0]);
    if (facing === 'horizontal') {
      for (let j = cordNum; j <= (cordNum + ship.length); j++) {
        if (board[cordV][j].state !== 'empty') {
          return false;
        }
      }
    } else {
      for (let i = cordV; i <= (cordV + ship.length); i++) {
        if (board[i][cordNum].state !== 'empty') {
          return false;
        }
      }
    }
    return true;
  },
  placeShip: (ship, board) => {
    const [randomH, randomV] = 0;
    do {
      randomH = Math.round(Math.random() * 9);
      randomV = Math.round(Math.random() * 9);
      let coord = board[randomV][randomH];
      let facing = ['horizontal', 'vertical']
    } while (validPosition(ship, coord, facing, board));
  }
})

export default GameBoard;