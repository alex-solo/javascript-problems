function splitString(string, delimiter) {
  var tempString = '';
  var length = string.length;
  var i;


  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  for (i = 0; i < length; i++) {
    if (string[i] === delimiter) {
      console.log(tempString);
      tempString = '';
    } else if (delimiter === '') {
      tempString = string[i];
      console.log(tempString);
      tempString = '';
    } else {
      tempString += string[i];
    }
  }

  if (!!tempString) {
    console.log(tempString);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello