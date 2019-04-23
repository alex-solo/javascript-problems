/*
input: string
output: object

RULES/REQUIREMENTS:
- lower-case, uppercase, neither counts
- spaces, special chars, nums are 'neither'
- return percentages in '43.00' format (two decimal places)

ALGORITHM:
- create a results object => {}
- iterate through string
- if char is a-z add 1 to lowercaseCount
- if char is A-Z add 1 to upperCaseCount
- else add 1 to neitherCount
- return object where:
    lowercase: ( lowercaseCount / string.length ) * 100 (formatted)
    ...

*/

function letterPercentages2(string) {
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / string.length) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / string.length) * 100).toFixed(2),
    neither: (((string.match(/[^A-Za-z]/g) || []).length / string.length) * 100).toFixed(2),
  }
}

console.log(letterPercentages2('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages2('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages2('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages2('d'));
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }


function letterPercentages(string) {
  var result = {};
  var lowercaseCount = 0;
  var uppercaseCount = 0;
  var neitherCount = 0;
  var char;
  var i;

  for (i = 0; i < string.length; i += 1) {
    char = string[i];
    if (/[a-z]/.test(char)) {
      lowercaseCount += 1;
    } else if (/[A-Z]/.test(char)) {
      uppercaseCount += 1;
    } else {
      neitherCount += 1;
    }
  }

  result = {
    lowercase: ((lowercaseCount / string.length) * 100).toFixed(2),
    uppercase: ((uppercaseCount / string.length) * 100).toFixed(2),
    neither: ((neitherCount / string.length) * 100).toFixed(2),
  }

  return result;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('d'));
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }
