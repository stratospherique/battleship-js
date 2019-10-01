const Ship = ((length) => ({
  length,
  type: () => {
    switch (length) {
      case 1:
        return 'Submarine';
      case 2:
        return 'Destroyer';
      case 3:
        return 'Cruiser';
      case 4:
        return 'Battelship';
      default:
        return false;
    }
  },
  position: [],
  healthPoints: length,
  hit(coord) {
    if (this.position.includes(coord)) {
      this.healthPoints -= this.isSunk() ? 0 : 1;
    }
  },
  isSunk() {
    return this.healthPoints === 0;
  },
}));
export default Ship;
