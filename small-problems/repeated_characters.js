function repeatedCharacters(string) {
  var stringCopy = string.toLowerCase();
  var repeated = {};
  var i;
  var j;
  var count = 0;

  for (i = 0; i < stringCopy.length; i++) {
    for (j = 0; j < stringCopy.length; j++) {
      if (stringCopy[i] === stringCopy[j]) {
        count += 1;
      }
    }

    if (count >= 2) {
      repeated[stringCopy[i]] = count;
    }
    count = 0;
  }

  return repeated;
}


console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
