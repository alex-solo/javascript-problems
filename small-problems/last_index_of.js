function lastIndexOf(arr, val) {
  var i = arr.length - 1;
  var index;

  for (; i >= 0; i--) {
    if (arr[i] === val) {
      return index;
    }
  }

  return -1;
}

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1