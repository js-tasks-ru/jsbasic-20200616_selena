/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
/* !!!  optimalinoe reshenie
    return str.split('-')
          .map( (item, index) => index==0 ? item : item[0].toUpperCase() + item.slice(1) )
          .join ('');
*/          
let arr = str.split('');
for (let i = 0; i < arr.length; i++) {
  if (arr[i]=="-") {
   arr.splice(i,1);
   arr[i] = arr[i].toUpperCase();
  }
}
return arr.join('');
}
