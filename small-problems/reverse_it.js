/*
Write a function that takes a string argument containing one or more words, 
and returns a new string containing the words from the string argument. 
All five-or-more letter words should have their letters in reverse order. 
The string argument will consist of only letters and spaces. Words will be separated by a single space.


input: string (1+ words, only letters and spaces)
output: srting containing words from input*

*RULES/REQUIREMENTS:
- if word length is 5 or more, word is reversed

ALGORITHM:
- create array of words from string
  - split at space
- transform array 
  - if lenght of word is >= 5, return
    - word reversed
  - else return
    - word
- return transformed array joined by ' '


*/


function reverseWords(string) {
  var wordArr = string.split(' ');

  return wordArr.map(function (word) {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  }).join(' ');
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"