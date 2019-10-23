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
        } while (moves.includes([randomV, randomH].join('')));
        moves.push([randomV, randomH].join(''));
        return [randomV, randomH];
      }
      const [cord1, cord2] = cell.pos.split('').map((e) => parseInt(e));
      if (!moves.includes([cord1, cord2].join(''))) {
        moves.push([cord1, cord2].join(''));
      } else { return false; }
      return [cord1, cord2];
    },
  };
};

export default Player;
