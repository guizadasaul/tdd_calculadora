import calcular from './calculadora.js';

describe('Calculadora de cadenas', () => {
  it('devuelve 0 para cadena vacía', () => {
    expect(calcular('')).toBe(0);
  });

  it('devuelve el número si solo hay uno', () => {
    expect(calcular('5')).toBe(5);
    expect(calcular('42')).toBe(42);
  });

  it('suma dos números separados por coma', () => {
    expect(calcular('1,2')).toBe(3);
  });

  it('suma múltiples números separados por coma', () => {
    expect(calcular('1,2,3')).toBe(6);
    expect(calcular('1,2,3,4')).toBe(10);
  });

  it('acepta guion como separador alternativo', () => {
    expect(calcular('1-2')).toBe(3);
    expect(calcular('1-2,3')).toBe(6);
  });
});
