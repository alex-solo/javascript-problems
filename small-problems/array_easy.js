function lastNOf(arr, count) {
  
  if (count > arr.length) {
    count = arr.length;
  }
  return arr.slice(arr.length - count);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 23));    // returns [16, 23, 42]

function endsOf(beginningArr, endingArr) {
  var resultArr = [];

  resultArr[0] = beginningArr[0];
  resultArr[1] = endingArr[endingArr.length - 1];

  return resultArr;
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]