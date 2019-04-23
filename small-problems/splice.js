function splice(array, start, num) {
  var deletedVals = [];
  var i;
  var j;
  var offset = num;

  for (i = start;; i++) {
    if (deletedVals.length === num) {
      break;
    }

    deletedVals.push(array[i]);
  }

  for (j = start;; j++) {
    array[j] = array[j + offset];

    if (array[j] === undefined) {
      break;
    }
  }
  array.length = array.length - num;

  return deletedVals;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
count;                                 // [ 1, 2, 8, 9 ]