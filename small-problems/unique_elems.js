function uniqueElements(arr) {
  var resultArr = [];
  var i;

  for (i = 0; i < arr.length; i++) {
    if (resultArr.indexOf(arr[i]) === -1) {
      resultArr.push(arr[i]);
    }
  }

  return resultArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]