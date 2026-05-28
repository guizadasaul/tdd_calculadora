function extraerInfo(cadena) {
  if (cadena.startsWith('//[')) {
    const espacioIdx = cadena.indexOf(' ');
    const parteDelims = cadena.slice(2, espacioIdx);
    const resto = cadena.slice(espacioIdx + 1);
    const delimitadores = [...parteDelims.matchAll(/\[([^\]]+)\]/g)].map(m => m[1]);
    return { delimitadores, resto };
  }
  return { delimitadores: [], resto: cadena };
}

function construirRegex(delimitadores) {
  const escapadas = delimitadores.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  return new RegExp([...escapadas, ',', '-'].join('|'));
}

export default function calcular(cadena) {
  if (cadena === '') return 0;
  const { delimitadores, resto } = extraerInfo(cadena);
  const regex = construirRegex(delimitadores);
  return resto.split(regex).reduce((acc, n) => acc + Number(n.trim()), 0);
}