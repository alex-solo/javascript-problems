var NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function numProcess(number, multiplier) {
  return Math.pow(10, multiplier) * number;
}

function stringToInteger(numStr) {
  var currentNumber;
  var len = numStr.length
  var multiplier = len - 1;
  var total = 0;
  var i;

  for (i = 0; i < len; i++) {
    currentNumber = NUMBERS.indexOf(numStr[i]);
    total += numProcess(currentNumber, multiplier);
    multiplier -= 1;
  }

  return total;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
