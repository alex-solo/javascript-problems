function myReduce(array, func, initial) {
  var result;

  if (initial === undefined) {
    initial = array[0];
    index = 1;
  } else {
    index = 0;
  }
  
  result = initial;

  array.slice(index).forEach(function (value) {
    result = func(result, value);
  });

  return result;
}

var smallest = function (result, value) {
  return result <= value ? result : value;
};

var sum = function (result, value) {
  return result + value;
};

function longestWord(words) {
  return myReduce(words, longest);
}

var longest = function (result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
};

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"