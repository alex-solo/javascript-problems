function octalToDecimal(numberString) {
  var BASE = 8;
  var i;
  var exponent;
  var numArr = numberString.split('').reverse();
  var result = 0;

  for (i = 0; i < numArr.length; i += 1) {
    exponent = i;
    result += numArr[i] * Math.pow(BASE, exponent);
  }

  return result;
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
