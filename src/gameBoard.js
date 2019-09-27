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
  positionShip(ship, position, facing) {
    const validPosition = position
  }
})

export default GameBoard;