function reverseArray(array) {
  var i = array.length - 1;
  var resultArray = [];

  for (; i >= 0; i--) {
    resultArray.push(array[i]);
  }

  return resultArray;
}

var names = ['Alex', 'Ben', 'Allison', 'Suzy', 'George'];

console.log(reverseArray(names));