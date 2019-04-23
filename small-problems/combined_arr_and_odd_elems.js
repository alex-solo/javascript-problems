function oddElementsOf(arr) {
  var resultArr = [];
  var i;

  for (i = 1; i < arr.length; i += 2) {
    resultArr.push(arr[i])
  }

  return resultArr;
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]

function combinedArray(even, odd) {
  var resultArr = [];
  var length = even.length;
  var i;

  for (i = 0; i < length; i++) {
    resultArr.push(even[i]);
    resultArr.push(odd[i]);
  }

  return resultArr;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters));  // returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]