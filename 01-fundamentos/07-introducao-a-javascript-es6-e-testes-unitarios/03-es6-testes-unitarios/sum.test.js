const sum = require('./sum');

test('if 4 + 5 is equal to 9', () => {
  expect(sum(4, 5)).toBe(9);
});

test('if 0 + 0 is equal to 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('if function throws error', () => {
  expect(() => { sum(4, '5')}).toThrow(Error);
});

test('if error message appears as', () => {
  expect(() => { sum(4, '5')}).toThrow('parameters must be numbers');
});