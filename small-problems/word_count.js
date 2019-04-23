function wordCount(string) {
  var wordArray = string.split(' ');
  var i;
  var wordObject = {};
  var word;

  for (i = 0; i < wordArray.length; i++) {
    word = wordArray[i];

    if (wordObject[word]) {
      wordObject[word] += 1;
    } else {
      wordObject[word] = 1;
    }
  }

  return wordObject;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
