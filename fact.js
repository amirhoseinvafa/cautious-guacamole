function fact(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result = result * i;
  }
  return result;
}
// T = O(n)

//  ------------------------------------

function fact1(number) {
  if (number === 0) return 1;

  return number * fact1(number - 1);
}
// T = O(n)

console.log(fact(4));
console.log(fact1(4));
