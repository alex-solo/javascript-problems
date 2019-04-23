function rot13(string) {
  var newString = '';
  var ascii;
  var char;
  var i;

  var UPPER_A_CHARCODE = 65;
  var UPPER_Z_CHARCODE = 90;
  var LOWER_A_CHARCODE = 97;
  var LOWER_Z_CHARCODE = 122;

  for (i = 0; i < string.length; i++) {
    char = string[i];
    ascii = char.charCodeAt(0);

    if (ascii >= UPPER_A_CHARCODE && ascii <= UPPER_Z_CHARCODE) {
      ascii = ascii + 13;
      ascii = (ascii > UPPER_Z_CHARCODE ? (ascii % UPPER_Z_CHARCODE) + 64 : ascii);
    }

    if (ascii >= LOWER_A_CHARCODE && ascii <= LOWER_Z_CHARCODE) {
      ascii = ascii + 13;
      ascii = (ascii > LOWER_Z_CHARCODE ? (ascii % LOWER_Z_CHARCODE) + 96 : ascii);
    }

    char = String.fromCharCode(ascii);
    newString += char;
  }

  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
