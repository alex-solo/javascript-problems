function push(arr, val) {
  var index = arr.length;

  arr[index] = val;
  return arr.length;
}

var count = [0, 1, 2];
push(count, 3);         // 4
count;                  // [ 0, 1, 2, 3 ]