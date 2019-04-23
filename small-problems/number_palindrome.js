function isPalindrome(string) {
  var i;
  var backIndex = string.length - 1;
  var stopAt = string.length / 2;

  for (i = 0; i < stopAt; i++) {
    if (string[i] !== string[backIndex]) {
      return false;
    }

    backIndex -= 1;
  }

  return true;
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(0022));           // true
console.log(isPalindromicNumber(5));            // true