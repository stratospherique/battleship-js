const computerBoard = (() => {
  const playerStatus = document.querySelector('.pl-status');
  const compStatus = document.querySelector('.cp-status');
  const comBoard = document.querySelector('.board__computer');
  const playerBoard = document.querySelector('.board__player');
  const playerHits = document.querySelector('#pl-hits')
  const compHits = document.querySelector('#cp-hits')
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
        <div class= "col " id = "P${[ind, jind].join('')}" > ${state}</div>
        `;
      }).join('');
      return (
        `
        <div class= "row" > ${row}</div>
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
  };

  const updateBanner = (turn, hits) => {
    if (turn) {
      playerHits.innerText = hits;
      playerStatus.classList.remove('active');
      compStatus.classList.add('active');
    } else {
      compHits.innerText = hits;
      playerStatus.classList.add('active');
      compStatus.classList.remove('active');
    }
  }

  const gameMessage = (turn, winner) => {
    if (turn) {
      playerHits.innerText = "is the winner";
      playerStatus.classList.remove('active');
      compStatus.classList.remove('active');
      playerStatus.classList.add('winner');
    } else {
      compHits.innerText = "is the winner";
      playerStatus.classList.remove('active');
      compStatus.classList.remove('active');
      compStatus.classList.add('winner');
    }
  }


  return {
    buildCompBoard, buildPlayerBoard, comBoard, changeCell, updateBanner, gameMessage
  };
})();
export default computerBoard;
