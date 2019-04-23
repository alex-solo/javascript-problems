/*
input: always positive integer
output: array of numbers from 1 to that number in ascending order

ALGORITHM:
- iterate through numbers 1 to argNumber
- populate an empty array until we reach the argNumber (include argNumber)
- return result array
*/

function sequence(number) {
  var result = [];
  var i;

  for (i = 1; i <= number; i += 1) {
    result.push(i);
  }

  return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]