function firstChar(string) {
  var i;
  var length = string.length;

  for (i = 0; i < length; i++) {
    if (string[i] !== ' ') {
      break;
    }
  }

  return i;
}

function lastChar(string) {
  var j;
  var length = string.length;

  for (j = length - 1; j >= 0; j--) {
    if (string[j] !== ' ') {
      break;
    }
  }

  return j;
}

function trim(string) {
  var start = firstChar(string);
  var end = lastChar(string);
  var resultString = '';
  var i;

  for (i = start; i <= end; i++) {
    resultString += string[i];
  }

  console.log(resultString);
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
