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

  it('acepta delimitador personalizado en formato //[d]', () => {
    expect(calcular('//[;] 6;7;4')).toBe(17);
  });

  it('combina delimitador personalizado con separadores por defecto', () => {
    expect(calcular('//[;] 6,3-2;1')).toBe(12);
  });

  it('ignora números mayores a 1000', () => {
    expect(calcular('2,1001')).toBe(2);
    expect(calcular('1000,1001')).toBe(1000);
  });

  it('acepta delimitadores de más de un carácter', () => {
    expect(calcular('//[***] 1***2***3')).toBe(6);
    expect(calcular('//[abc] 1abc2abc3')).toBe(6);
  });

  it('acepta múltiples delimitadores en formato //[d1][d2]', () => {
    expect(calcular('//[*][%] 1*2%3,7-9')).toBe(22);
    expect(calcular('//[**][%%] 1**2%%3')).toBe(6);
  });
});
