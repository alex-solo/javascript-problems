// string[i] = 'd'
// if string[i + 1] === 'd' 
  // continue

function crunch(string) {
  var newString = '';
  var currentChar;
  var i;

  for (i = 0; i < string.length; i++) {
    currentChar = string[i];
    if (currentChar !== string[i + 1]) {
      newString += currentChar;
    } else {
      continue;
    }
  }

  console.log(newString);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
