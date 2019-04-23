function stringy(num) {
  var string = '';
  var i;

  for (i = 1;;) {
    if (string.length === num) {
      break;
    }
    string += i.toString();
    i = (i === 1 ? 0 : 1);
  }

  console.log(string);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"