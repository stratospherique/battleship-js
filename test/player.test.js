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

  it.only('return a random coordinates if bot', () => {
    const player = Player('Alex', 'bot');
    expect(player.play()).toEqual(4);
  });
})