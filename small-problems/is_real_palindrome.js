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

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true


function isRealPalindrome(string) {
  return isPalindrome(string.replace(/[^a-z0-9]/gi,'').toLowerCase());
}


console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
