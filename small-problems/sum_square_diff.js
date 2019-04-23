/*
input: integer
output: integer*

*RULES/REQUIREMENTS:
-  (the square of the sum of the first n) - (sum of the squares of the first n)

ALGORITHM:
- get square of sums*
- get sum of squares*
- return square of sums - sum of squares

* loop:
  - starting with 1:
    - loop until n
    - at each iteration update sums
    - at each iteration update sums of squares
  - after loop reaches n:
    - square sums
    - return square of sums - sum of squares

*/

function sumSquareDifference(number) {
  var sumTotal = 0;
  var sumofSquares = 0;
  var i;

  for (i = 1; i <= number; i += 1) {
    sumTotal += i;
    sumofSquares += (i ** 2);
  }

  return sumTotal ** 2 - sumofSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150