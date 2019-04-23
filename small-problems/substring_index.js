// iterate from 0 -> (string.length - 1)
// if string[i] === string2 return i
// else return -1

function lastIndexOf(firstString, secondString) {
  var i;
  var j;
  var k;
  var firstChar = firstString.length - secondString.length;
  var stringIndex = -1;

  for (i = firstChar;; i--) {
    k = 0;

    if (i < 0) {
      break;
    }

    if (firstString[i] === secondString[k]) {
      for (j = i;; j++) {
        if (k === secondString.length) {
          stringIndex = i;
          break;
        }

        if (firstString[j] !== secondString[k]) {
          break;
        }
        k += 1;
      }
    }

    if (k === secondString.length) {
      break;
    }
  }

  console.log(stringIndex);
}

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

function indexOf(firstString, secondString) {
  var i;
  var j;
  var k = 0;
  var stopCond = firstString.length - secondString.length;
  var stringIndex = -1;

  for (i = 0;; i++) {
    if (i > stopCond) {
      break;
    }

    if (firstString[i] === secondString[k]) {
      for (j = i;; j++) {
        if (k === secondString.length) {
          stringIndex = i;
          break;
        }

        if (firstString[j] !== secondString[k]) {
          break;
        }
        k += 1;
      }
    }
  }

  console.log(stringIndex);
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1