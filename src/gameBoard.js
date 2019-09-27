const gridT = [
  'ABCDEFGHIJ',
  '0123456789',
]

const grid = () => {
  const tmp = new Array(10);
  gridT[0].split('').forEach((item, i) => {
    tmp[i] = [];
    gridT[1].split('').forEach((suItem) => {
      tmp[i].push(`${item}${suItem}`);
    });
  });
  return tmp;
}

const GameBoard = () => ({
  grid: grid(),
  validPosition: (ship, coord, facing) => {
    let valid = null;
    const cordNum = parseInt(coord.split('')[1]);
    if (facing === 'horizontal') {
      switch (ship.length) {
        default:
          valid = true;
          break;
        case ship.length === 2 && cordNum === 9:
          valid = false;
          break;
        case ship.length === 3 && cordNum > 7:
          valid = false;
          break;
        case ship.length === 4 && cordNum > 6:
          valid = false;
          break;
      }
    }
    return valid;
  }
})

export default GameBoard;