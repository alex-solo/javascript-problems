function repeat(string, times) {
  var tempString;
  var counter;

  if (times < 0 || typeof times !== 'number' ) {
    console.log('undefined');
    return;
  }

  tempString = ''
  for (counter = 0; counter < times; counter++) {
    tempString += string;
  }

  console.log(tempString);
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined
repeat('xo', 5);
