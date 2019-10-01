import Ships from '../src/ships';
import Ship from '../src/ships';

describe('Testing the Creation of a ship', () => {
  it('builds a ship with a valid length', () => {
    const ship = Ships(4);
    expect(ship.length).toBe(4);
    expect(ship.type()).toBeTruthy();
  });

  it('builds a ship with non valid length', () => {
    const ship = Ships(0);
    expect(ship.type()).toBeFalsy();
  });

  it('builds a submarine', () => {
    const ship = Ships(1);
    expect(ship.type()).toBe('Submarine');
  });

  it('builds a destroyer', () => {
    const ship = Ships(2);
    expect(ship.type()).toBe('Destroyer');
  });

  it('builds a Cruiser', () => {
    const ship = Ships(3);
    expect(ship.type()).toBe('Cruiser');
  });

  it('builds a Battelship', () => {
    const ship = Ships(4);
    expect(ship.type()).toBe('Battelship');
  });
});

describe('Testing ship during gameplay', () => {
  it('ship health points reducing after getting hit', () => {
    const ship = Ships(4);
    ship.position = ['01', '02', '03', '04'];
    const initHealth = ship.healthPoints;
    ship.hit('01');
    expect(initHealth).toBe(ship.healthPoints + 1);
  });

  it('ship sunks after getting hit "length" times', () => {
    const ship = Ships(4);
    ship.position = ['01', '02', '03', '04'];
    ship.position.forEach((coord) => ship.hit(coord));
    expect(ship.healthPoints).toBe(0);
    expect(ship.isSunk()).toBeTruthy();
  });
});