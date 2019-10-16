const computerBoard = (() => {
  const comBoard = document.querySelector('.board__computer');
  const playerBoard = document.querySelector('.board__player');
  let j = -1;
  const buildCompBoard = (game) => {
    const html = game.board.map((line, i) => {
      const row = line.map((cell) => {
        j++;
        let mark;
        switch (cell.state) {
          case 'hit':
            mark = 'X';
            break;
          case 'miss':
            mark = '||';
            break;
          default:
            mark = j;
            break;
        }
        return `
        <div class="col" id="${j}">${mark}</div>
        `;        
      }).join('');
      return (
        `
        <div class="row" > ${row}</div>
        `
      );
    }).join('');
    comBoard.innerHTML = html;
  };

  const buildPlayerBoard = (board) => {
    const html = board.map((line) => {
      const row = line.map((cell, ind) => {
        let state;
        switch (cell.state) {
          case 'taken':
            state = '#';
            break;
          case 'miss':
            state = '||';
            break;
          default:
            state = ind;
            break;
        }
        return `
        <div class= "col ${cell.state}" id = "${ind}" > ${state}</div>
        `;
      }).join('');
      return (
        `
        <div class= "row" > ${ row}</div>
        `
      );
    }).join('');
    playerBoard.innerHTML = html;
  };
  return {
    buildCompBoard, buildPlayerBoard, comBoard
  };
})();
export default computerBoard;
