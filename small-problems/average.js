/*
input: array of integers (never empty, integers always positive)
output: one number*

*RULES/REQUIREMENTS:
  - result number is average of the integers in array
  - result is rounded to integer component
    - 43.343 => 43

ALGORITHM:
- sum all numbers in array (reduce?)
- divide result by array length
- round result down to nearest integer and return

*/

function average(array) {
  var result = array.reduce(function (sum, num) {
    return sum + num;
  }) / array.length;

  return Math.floor(result);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
