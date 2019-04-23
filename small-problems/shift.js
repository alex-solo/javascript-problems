function shift(array) {
  var firstVal = array[0];
  var i;

  for (i = 0; i < array.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  array.length = array.length - 1;
  return firstVal;
}

var count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]