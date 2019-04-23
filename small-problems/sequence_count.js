/*
input: 2 integers
  - count (>= 0)
  - start of sequence

output: count sized array

REQUIREMENTS:
- first num in array is start of sequence
- every number after is multiple of first num
- if count is zero, return empty array

ALGORITHM:
- create an empty result array
- loop from 1 to count (inclusive)
- on each iteration 
  - populate array with start of sequence * i
- return result array

*/

function sequence(count, start) {
  var result = [];
  var i;

  for (i = 1; i <= count; i += 1) {
    result.push(start * i);
  }

  return result;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []