/*
input: string
output: string

RULES:
- result string is same but with numbers as words replaced by digits

ALGORITHM:
- create array of numStrings ['zero', 'one', ...]
- create new regex object (every element in array joined by '|')
- create array of words (from provided string)
- transform arr of words
    if there is a match between word and regex object replace word with corresponding index (as string) in the numStrings array
- join array with spaces and return string

*/

function wordToDigit(string) {
  var numStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var regex;

  numStrings.forEach(function (word) {
    regex = new RegExp('\\b' + word + '\\b', 'g');
    string = string.replace(regex, numStrings.indexOf(word));
  })

  return string;  
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('The weight is done.'));