function toLowerCase(string) {
  var finalString;
  var chrCode;
  var char;
  var i;

  finalString = '';
  for (i = 0; i < string.length; i++) {
    char = string[i];
    chrCode = string[i].charCodeAt(0);
    if (chrCode >= 65 && chrCode <= 90) {
      chrCode += 32;
      finalString += String.fromCharCode(chrCode);
    } else {
      finalString += string[i];
    }
  }

  console.log(finalString);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"