/*
input: positive or negative integer
output: negative of the input or same if number is already negative

ALGORITHM:
- check if number is <= 0
  - if so, return number
  - else return -number


*/

function negative(number) {
  return number < 0 ? number : -number;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0