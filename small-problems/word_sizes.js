function wordSizes(string) {
  var wordArr = string.split(' ');
  var sizesObj = {};
  var i;

  for (i = 0; i < wordArr.length; i++) {
    var word = wordArr[i].replace(/\W/g, '');
    var wordSize = word.length;


    if (wordSize === 0) {
      return sizesObj;
    }

    sizesObj[wordSize] = sizesObj[wordSize] || 0;
    sizesObj[wordSize] += 1;
  }

  return sizesObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}


var string = 'this is a long \ 
string'

if (NaN) {
  console.log('hello');
} else {
  console.log('world');
}