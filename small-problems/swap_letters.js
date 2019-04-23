function swap(string) {
  var wordsArr = string.split(' ');

  var result = wordsArr.map(function(word) {
    var atFirstIndex = word[0];
    var atLastIndex = word[word.length - 1];
    var charArr = word.split('');

    charArr[0] = atLastIndex;
    charArr[word.length - 1] = atFirstIndex;
    return charArr.join('');
  });

  return result.join(' ');
}


console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"