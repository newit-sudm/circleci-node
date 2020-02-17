const minus = require('./minus');

test('adds 3 - 1 to equal 2', () => {
  expect(minus(3, 1)).toBe(2);
});