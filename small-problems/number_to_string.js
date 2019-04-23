var NUMBERS = {0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 
               6: '6', 7: '7', 8: '8', 9: '9'};

function integerToString(numArg) {
  var dividePowerTo = 0;
  var powerTo = 1;
  var number;
  var i;
  var numStr = '';

  for (i = powerTo;; i++) {
    tempNumber = Math.floor(numArg % Math.pow(10, i));
    number = Math.floor(tempNumber / Math.pow(10, dividePowerTo));
    numStr += NUMBERS[number];
    if (tempNumber === numArg) {
      break;
    }

    dividePowerTo += 1;
  }

  return numStr.split('').reverse().join('');
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"