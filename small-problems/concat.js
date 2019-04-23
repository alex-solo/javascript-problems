function concat(arr1, arr2) {
  var resultArr = [];
  var i;

  for (i = 0; i < arr1.length; i++) {
    resultArr.push(arr1[i]);
  }

  for (i = 0; i < arr2.length; i++) {
    resultArr.push(arr2[i]);
  }

  return resultArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]