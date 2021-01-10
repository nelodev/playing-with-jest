const getRandomCity = require('../index');

describe('Tests of index.js (getRandomCity)', () => {
  test('Should get random city', () => {
    expect(typeof getRandomCity()).toBe('string');
  });

  test('Should not exist city "Madrid"', () => {
    expect(getRandomCity()).not.toMatch(/Mexico/);
  });
});
