const computerBoard = (() => {
  const comBoard = document.querySelector('.board__computer');
  const playerBoard = document.querySelector('.board__player');
  const buildCompBoard = (board) => {
    const html = board.map((line) => {
      const row = line.map((cell, ind) => {
        let state;
        switch (cell.state) {
          case 'hit':
            state = 'X';
            break;
          case 'miss':
            state = '||';
            break;
          default:
            state = ind;
            break;
        }
        return `
        <div class="col" id="${ind}">${state}</div>
        `}).join('');
      return (
        `
          <div class="row">${row}</div>
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
        <div class="col ${cell.state}" id="${ind}">${state}</div>
        `;
      }).join('');
      return (
        `
          <div class="row">${row}</div>
        `
      );
    }).join('');
    playerBoard.innerHTML = html;
  };
  return {
    buildCompBoard, buildPlayerBoard,
  };
})();
export default computerBoard;
