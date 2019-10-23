import Player from '../src/player';

describe('testing the creation of players', () => {
  it('create a human player', () => {
    const player = Player('jorge', 'human');
    expect(player.getName()).toBe('jorge');
    expect(player.getType()).toBe('human');
  });

  it('create a bot player', () => {
    const player = Player('Alex', 'bot');
    expect(player.getName()).toBe('Alex');
    expect(player.getType()).toBe('bot');
  });

  it('return a random coordinates if bot', () => {
    const player = Player('Alex', 'bot');
    expect(player.play().length).toEqual(2);
  });

  it('returns the specific coordinates when the player moves', () => {
    const cell = { pos: '35' };
    const player = Player('jorge', 'human');
    expect(player.play(cell)).toEqual([3, 5]);
  });
});
