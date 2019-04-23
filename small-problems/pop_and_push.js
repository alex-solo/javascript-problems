function pop(array) {
  var lastVal = array[array.length - 1];

  array.length = array.length - 1;
  return lastVal;
}

function push() {
  var array = arguments[0];
  var length = arguments.length
  var i;

  for (i = 1; i < length; i++) {
    array[array.length] = arguments[i];
  }

  return array.length;
}

// push
var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));              // 6

console.log(array);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
