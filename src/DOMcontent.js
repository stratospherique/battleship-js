const computerBoard = (() => {
  const comBoard = document.querySelector('.board__computer');
  const playerBoard = document.querySelector('.board__player');
  const buildCompBoard = (game) => {
    const html = game.board.map((line, i) => {
      const row = line.map((cell, j) => {
        let mark;
        let state = '';
        switch (cell.state) {
          case 'hit':
            mark = 'X';
            state = 'hit';
            break;
          case 'miss':
            mark = '||';
            state = 'miss';
            break;
          default:
            mark = [i, j].join('');
            break;
        }
        return `
        <div class="col bot ${state}" id="${[i, j].join('')}">${mark}</div>
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

  const buildPlayerBoard = (game) => {
    const html = game.board.map((line, ind) => {
      const row = line.map((cell, jind) => {
        let state;
        switch (cell.state) {
          case 'taken':
            state = '#';
            break;
          default:
            state = [ind, jind].join('');
            break;
        }
        return `
        <div class= "col ${cell.state}" id = "P${[ind, jind].join('')}" > ${state}</div>
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

  const changeCell = (div, cell) => {
    let state = '';
    let mark;
    switch (cell.state) {
      case 'hit':
        mark = 'X';
        state = 'hit';
        break;
      case 'miss':
        mark = '||';
        state = 'miss';
        break;
      default:
        mark = div.innerHtml;
        break;
    }
    div.classList.add(state);
    div.innerText = mark;
  }


  return {
    buildCompBoard, buildPlayerBoard, comBoard, changeCell
  };
})();
export default computerBoard;
