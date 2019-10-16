const playerBoard = (() => {
  const playerBoard = document.querySelector('.player__board');
  //const botBoard = document.querySelector('.bot__board');
  const buildBoard = (board) => {
    const html = board.map((line) => {
      const row = line.map((cell, ind) => {
        return
        `
        <div class="col" id="${ind}">${ind}</div>
        `
      }).join('');
      return
      `
      <div class="row">${row}</div>
      `
    }).join('');
    playerBoard.innerHTML = html;
  }
  return {
    buildBoard
  }
})();
export default playerBoard;

