// function octalToDecimal(numberString) {
//   var BASE = 8;
//   var i;
//   var exponent;
//   var numArr = numberString.split('').reverse();
//   var result = 0;
// 
//   for (i = 0; i < numArr.length; i += 1) {
//     exponent = i;
//     result += numArr[i] * Math.pow(BASE, exponent);
//   }
// 
//   return result;
// }

function octify(element, index, array) {
  var BASE = 8;
  var currentIndex = array.length - 1 - index;

  return element * Math.pow(BASE, currentIndex);
}

function octalToDecimal(numberString) {
  var numArr = numberString.split('');

  var decimalParts = numArr.map(octify);

  return decimalParts.reduce(function (sum, part) {
    return sum + part;
  });
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
