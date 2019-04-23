function matrixSums(arr) {
  var i;
  var j;
  var resultArr = [];
  var sumOfVals = 0;

  for (i = 0; i < arr.length; i++) {
    sumOfVals = 0;

    for (j = 0; j < arr[i].length; j++) {
      sumOfVals += arr[i][j];
    }
    
    resultArr.push(sumOfVals);
  }

  return resultArr;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]