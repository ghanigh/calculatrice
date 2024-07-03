const { add, subtract, multiply, divide } = require('./calculatrice');

describe('Calculator', () => {
  test('addition of two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, -1)).toBe(-2);
    expect(add(1.5, 1.5)).toBe(3);
  });

  test('subtraction of two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
    expect(subtract(1.5, 0.5)).toBe(1);
  });

  test('multiplication of two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(1.5, 2)).toBe(3);
  });

  test('division of two numbers', () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(-6, 3)).toBe(-2);
    expect(divide(1.5, 0.5)).toBe(3);
  });

  test('division by zero', () => {
    expect(() => divide(6, 0)).toThrow('Division by zero');
  });
});
