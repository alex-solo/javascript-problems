/*
input: number
output: featured* number

*RULES/REQUIREMENTS:
- output next number (higher than argument)
  - ODD number
  - MULTIPLE of 7
  - UNIQUE digits
- if no featured number exists, issue an error

ALGORITHM:
- Loop:
  - add 1 to arg until odd and multiple of 7 and unique digits
  - return result
  - loop from argument number to infinity
  - if reach infinity, issue an error

*/

function uniqueDigits(num) {
  var numStrArr = String(num).split('');
  var valuesSoFar = [];
  var i;

  for (i = 0; i < numStrArr.length; i += 1) {
    if (valuesSoFar.indexOf(numStrArr[i]) !== -1) {
      return false;
    } else {
      valuesSoFar.push(numStrArr[i]);
    }
  }

  return true;
}

function featuredConditionsMet(num) {
  return num % 2 === 1 && num % 7 === 0 && uniqueDigits(num);
}

function featured(num) {
  var i;

  for (i = num + 1; i < Infinity; i += 1) {
    if (featuredConditionsMet(i)) {
      return i;
    }
  }

  return 'There is no featured number!'
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(1023456987));    // 1023456987
console.log(featured(1023457869));    // 1023456987
