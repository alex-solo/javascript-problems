/*


*/

function isUpperCaseChar(char) {
  return char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
}

function isLowerCaseChar(char) {
  return char.charCodeAt() >= 97 && char.charCodeAt() <= 122;
}

function shiftChar(char, key) {
  var charCode = char.charCodeAt() + key;

  if (isLowerCaseChar(char)) {
    charCode = charCode <= 122 ? charCode : charCode % 122 + 96;
  } else if (isUpperCaseChar(char)) {
    charCode = charCode <= 90 ? charCode : charCode % 90 + 65;
  }

  return String.fromCharCode(charCode);
}

function caesarEncrypt(string, key) {
  var charArr = string.split('');

  return charArr.map(function (char) {
    if (char.match(/[a-z]/i)) {
      return shiftChar(char, key);
    } else {
      return char;
    }
    
  }).join('');
}

// simple shift
console.log(caesarEncrypt('A', 3));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('a', 3));       // "d"
console.log(caesarEncrypt('a', 3));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox juuumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"