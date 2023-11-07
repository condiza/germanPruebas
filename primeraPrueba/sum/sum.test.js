const operaciones = require('./sum');

test('adds 1+1 to equal 2', () => {
  expect(operaciones.suma(1, 1)).toBe(2);
});

test('subtracts 1-1to equal ', () => {
  expect(operaciones.resta(1, 1)).toBe(0);
});

test('subtracts 1*2 to equal 2', () => {
  expect(operaciones.multiplicacion(1,2)).toBe(2);
});

test('subtracts 4/2 to equal 2', () => {
  expect(operaciones.divicion(4, 2)).toBe(2);
});

describe('Concatenate Strings', () =>{
  test('Contatenate two strings', () =>{
      expect(operaciones.concatenateStrings('Hello, ', 'world')).toBe('Hello, world');
  });

  test('Lanza un error si alguno de los argumentos no es una cadena', () => {
    expect(() => operaciones.concatenateStrings('sapo', 123)).toThrowError('Los datos deben de ser cadenas');
  });
  
});


