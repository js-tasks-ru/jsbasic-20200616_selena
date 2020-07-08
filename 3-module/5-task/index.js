/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  str = str
      .split (' ')
      .join (',')
      .split (',')
      .filter ( item => (typeof Number(item) && !Number.isNaN(item))  ? +item : item.slice(1) );
  let min = str.reduce ( (min, item) => Math.min(min, item) );
  let max = str.reduce ( (max, item) => Math.max(max, item) );
  return { min: min, max: max }
}
