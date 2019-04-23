function findValue(searchParam, array) {
  var i;

  for (i = 0; i < array.length; i++) {
    if (array[i] === searchParam) {
      return i;
    } 
  }

  return -1;
}

console.log(findValue('a', ['z', 9, 'b', 34, 'hi there', 22, 'f', 'bv', 'o']));
