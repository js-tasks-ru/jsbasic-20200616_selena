/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let fact=1;

  if (n==0) 
    fact = 1;

  for(let i=n; i>=1; i--) {
    fact = fact * i;
  }
  return fact;
}
