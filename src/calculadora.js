export default function calcular(cadena) {
  if (cadena === '') return 0;
  return cadena.split(',').reduce((acc, n) => acc + Number(n), 0);
}