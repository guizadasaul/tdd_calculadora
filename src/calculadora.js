export default function calcular(cadena) {
  if (cadena === '') return 0;
  const partes = cadena.split(',');
  return Number(partes[0]) + Number(partes[1] || 0);
}