// The shift method removes the first element from an array and 
// returns that element; if the array is empty, shift returns 
// undefined

function shift(array) {
  var result;

  if (array.length !== 0) {
    result = array.splice(0, 1)[0];
  }

  return result;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

// The unshift method adds one or more elements to the start of 
// an array and returns the new length of the array. Both methods 
// mutate the original array.

function unshift(array) {
  var i;

  for (i = 1; i < arguments.length; i++) {
    array.splice(i - 1, 0, arguments[i]);
  }

  return array.length;
}

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3