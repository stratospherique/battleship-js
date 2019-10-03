const Player = (nam, typ) => {
  const type = typ;
  const name = nam;
  const moves = [];
  return {
    getName: () => name,
    getType: () => type,
    getMoves: () => moves,
    play: (cell) => {
      if (type === 'bot') {
        let randomH;
        let randomV;
        do {
          randomH = Math.round(Math.random() * 9);
          randomV = Math.round(Math.random() * 9);
        } while (moves.includes([randomV, randomH]));
        moves.push([randomV, randomH]);
        return [randomV, randomH];
      }
      return parseInt(cell.position.split(''));
    },
  }

}

export default Player;