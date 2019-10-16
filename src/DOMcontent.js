const computerBoard = (() => {
  const comBoard = document.querySelector('.board__computer');
  const playerBoard = document.querySelector('.board__player');
  const buildCompBoard = (board) => {
    const html = board.map((line) => {
      const row = line.map((cell, ind) => (
        `<div class="col ${cell.state}" id="${ind}">${ind}</div>`
      )).join('');
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
      const row = line.map((cell, ind) => (
        `<div class="col ${cell.state}" id="${ind}">${ind}</div>`
      )).join('');
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
