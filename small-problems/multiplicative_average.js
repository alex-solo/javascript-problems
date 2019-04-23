/*
input: array of integers
output: string of value* rounded to 3 decimal places

*Value REQUIREMENTS/RULES:
  - multiply all values in array together
  - divide result by array.length
  - rounded to three decimal places, returned as string


ALGORITHM:
  - multiply each element together => number
  - result = divide number by array.length => 7.5
  - whole number = result floored
  - decimal is result - whole number, rounded to 3 decimal places
  - convert decimal to string
    - if string length < 5
      add '0' until string length is 5

  concat whole number (converted to string) with decimal string
*/

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

function showMultiplicativeAverage(array) {
  var multiplicationResult = array.reduce(function (product, num) {
    return product * num;
  });
  var result = multiplicationResult / array.length;
  var wholeNum = Math.floor(result);
  var decimal = String(precisionRound(result - wholeNum, 3)).slice(1);

  while (decimal.length < 4) {
    decimal += '0';
  }

  return String(wholeNum) + decimal;
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
console.log(showMultiplicativeAverage([30, 0]));                   // "0.000"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"