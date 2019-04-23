/*
input: number
output: array - list of every digit in number

ALGORITHM:
- convert each number to string
- split string to numChars
- transform result array 
  - return numChar converted to number

*/

function digitList(number) {
  return String(number).split('').map(function (numChar) {
    return parseInt(numChar, 10);
  });
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
