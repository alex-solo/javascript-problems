function concatPair(array1, secondArgument) {
  var i;
  var newArr = array1.slice(0);

  if (Array.isArray(secondArgument)) {
    for (i = 0; i < secondArgument.length; i++) {
      newArr.push(secondArgument[i]);
    }
  } else {
    newArr.push(secondArgument);
  }

  return newArr;
}

function concat(vals) {
  var array1 = arguments[0];
  var resultArr = array1;
  var i;

  for (i = 1;; i++) {
    if (arguments[i] === undefined) {
      break;
    }
    resultArr = concatPair(resultArr, arguments[i]);
  }

  return resultArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]

