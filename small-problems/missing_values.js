function missing(array) {
  var resultArr = [];
  var i;
  var firstVal = array[0];
  var lastVal = array[array.length - 1]

  for (i = firstVal; i <= lastVal; i++) {
    if (array.indexOf(i) === -1) {
      resultArr.push(i);
    }
  }

  return resultArr;
}


console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []