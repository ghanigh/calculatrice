// IMPORTATION DES FONCTIONS DE LA CALCULATRICE
const { add, subtract, multiply, divide } = require('./calculatrice');

// DESCRIPTION DU GROUPE DE TESTS POUR LA CALCULATRICE
describe('Calculator', () => {
  
  // TEST POUR L'ADDITION DE DEUX NOMBRES
  test('addition of two numbers', () => {
    // TESTE L'ADDITION DE 1 ET 2
    expect(add(1, 2)).toBe(3);
    // TESTE L'ADDITION DE -1 ET -1
    expect(add(-1, -1)).toBe(-2);
    // TESTE L'ADDITION DE 1.5 ET 1.5
    expect(add(1.5, 1.5)).toBe(3);
  });

  // TEST POUR LA SOUSTRACTION DE DEUX NOMBRES
  test('subtraction of two numbers', () => {
    // TESTE LA SOUSTRACTION DE 5 ET 3
    expect(subtract(5, 3)).toBe(2);
    // TESTE LA SOUSTRACTION DE 3 ET 5
    expect(subtract(3, 5)).toBe(-2);
    // TESTE LA SOUSTRACTION DE 1.5 ET 0.5
    expect(subtract(1.5, 0.5)).toBe(1);
  });

  // TEST POUR LA MULTIPLICATION DE DEUX NOMBRES
  test('multiplication of two numbers', () => {
    // TESTE LA MULTIPLICATION DE 2 ET 3
    expect(multiply(2, 3)).toBe(6);
    // TESTE LA MULTIPLICATION DE -2 ET 3
    expect(multiply(-2, 3)).toBe(-6);
    // TESTE LA MULTIPLICATION DE 1.5 ET 2
    expect(multiply(1.5, 2)).toBe(3);
  });

  // TEST POUR LA DIVISION DE DEUX NOMBRES
  test('division of two numbers', () => {
    // TESTE LA DIVISION DE 6 PAR 3
    expect(divide(6, 3)).toBe(2);
    // TESTE LA DIVISION DE -6 PAR 3
    expect(divide(-6, 3)).toBe(-2);
    // TESTE LA DIVISION DE 1.5 PAR 0.5
    expect(divide(1.5, 0.5)).toBe(3);
  });

  // TEST POUR LA DIVISION PAR ZÉRO
  test('division by zero', () => {
    // TESTE LA DIVISION DE 6 PAR 0, QUI DOIT LANCER UNE ERREUR
    expect(() => divide(6, 0)).toThrow('Division by zero');
  });
});
