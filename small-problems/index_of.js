function indexOf(arr, val) {
  var index = -1;
  var i;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      index = i;
      break;
    }
  }

  console.log(index);
}


indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1