/*
plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

"Pineapples don't go on pizzas!"
'aaaaaaaaaa aaa a aa aa aaaaaa


ALGORITHM:
- create empty result string
- iterate through each char in string, initialize keyword char index
- if the char is alphabetic
-   shift char corresponds to same index in keyword unless reach length of keyword
    increase keyword char index by 1
    convert char at keyword char index to shift value
    append return value of caesar cipher(char, shift value)
- if keyword char index is keyword length - 1, reset its index to 0
- if not alphabetic, append char to result string

*/

var ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function getKey(keyword, keywordIndex) {
  return ALPHABET.indexOf(keyword[keywordIndex]);
}

function vigenereCipher(text, keyword) {
  var result = '';
  var keywordIndex = 0;
  var i;

  for (i = 0; i < text.length; i += 1) {
    if (ALPHABET.indexOf(text[i].toLowerCase()) !== -1) {
      result += caesarEncrypt(text[i], getKey(keyword, keywordIndex));
      keywordIndex += 1;

      if (keywordIndex === keyword.length) {
        keywordIndex = 0;
      }
    } else {
      result += text[i];
    }
  }

  return result;
}

var text = "Pineapples don't go on pizzas!";
//console.log(vigenereCipher(text, 'a'));
// Pineapples don't go on pizzas!

var text2 = "Pineapples don't go on pizzas!";
console.log(vigenereCipher(text2, 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vigenereCipher('Dog', 'Rabbit'));

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

