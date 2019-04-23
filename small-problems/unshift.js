function unshift(arr, val) {
  var i = arr.length - 1;
  
  for (; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = val;
  return arr.length;
}

var count = [1, 2, 3];
unshift(count, 0);      // 4
count;                  // [ 0, 1, 2, 3 ]