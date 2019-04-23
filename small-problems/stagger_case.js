function staggeredCase(string) {
  return string.split('').map(function (char, index) {
    if (index % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"

function staggeredCaseTwo(string) {
  var stringArr = string.split('');
  var toCap = true;
  var i;

  for (i = 0; i < string.length; i += 1) {
    if (/[^a-z]/i.test(stringArr[i])) {
      continue;
    }

    if (toCap) {
      stringArr[i] = stringArr[i].toUpperCase();
      toCap = false;
    } else {
      stringArr[i] = stringArr[i].toLowerCase();
      toCap = true;
    }
  }

  return stringArr.join('');
}

console.log(staggeredCaseTwo('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCaseTwo('ALL_CAPS'));                     // "AlL cApS"
console.log(staggeredCaseTwo('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"