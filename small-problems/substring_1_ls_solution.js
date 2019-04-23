function substr(string, start, length) {
  var subString;
  var index;
  var i;

  if (start < 0) {
    start = string.length + start;
  }

  subString = '';
  for (i = 0; i < length; i++ ) {    
    index = start + i;
    
    if (string[index] === undefined) {
      break;
    }

    subString += string[index]
  }

  console.log(subString);
}

var string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""
