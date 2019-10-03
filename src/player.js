const Player = (name, computer) => {
  return {
    name,
    computer,
    playerTurn: (cell) => {
      return parseInt(cell.position.split(''));
    },
  }
    
}