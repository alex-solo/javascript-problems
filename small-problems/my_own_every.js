function myOwnEvery(array, func) {
  var result = true;
  var i;

  for (i = 0; i < array.length; i += 1) {
    if (!func(array[i])) {
      result = false;
      break;
    }
  }

  return result;
}

var isAString = function (value) {
  return typeof value === 'string';
};

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

var isANumber = function (value) {
  return typeof value === 'number' && !Number.isNaN(value);
};

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false