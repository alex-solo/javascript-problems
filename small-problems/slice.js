function slice(array, start, end) {
  var resultArr = [];
  var i;

  for (i = start; i < end; i++) {
    resultArr.push(array[i]);
  }

  return resultArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]