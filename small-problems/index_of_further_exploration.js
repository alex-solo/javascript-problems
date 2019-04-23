function lastIndexOf(firstString, secondString) {
  var start = firstString.length - secondString.length;
  var subString;
  var idxSubString;
  var i;

  for (i = start; i > 0; i--) {
    subString = firstString.slice(i);
    idxSubString = indexOf(subString, secondString);

    if (idxSubString === 0) {
      return i;
    }
  }

  return -1;
}

function indexOf(firstString, secondString) {
  var limit = firstString.length - secondString.length;
  var matchCount;
  var i;
  var j;

  for (i = 0; i <= limit; i++) {
    matchCount = 0;

    for (j = 0; j < secondString.length; j++) {
      if (firstString[i + j] === secondString[j]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return i;
    }
  }

  return -1;
}

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
