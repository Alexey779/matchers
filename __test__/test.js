import sortHeroesByHealth from '../src/task';

test('test for heroes sort by health', () => {
  const testHeroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sortedHeroes = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortHeroesByHealth(testHeroes);

  expect(result).toEqual(sortedHeroes);
});
