import calcular from './calculadora.js';

describe('Calculadora de cadenas', () => {
  it('devuelve 0 para cadena vacía', () => {
    expect(calcular('')).toBe(0);
  });

  it('devuelve el número si solo hay uno', () => {
    expect(calcular('5')).toBe(5);
    expect(calcular('42')).toBe(42);
  });
});
