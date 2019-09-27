const Ship = ((length) => ({
  length,
  position: [],
  healthPoints: 0,
  hit() {
    this.isSunk() ? null : this.healthPoints += 1;
  },
  isSunk() {
    return this.hits >= this.length;
  },
}));
export default Ship;
