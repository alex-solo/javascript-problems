/*
input: one array
output: is one array of two arrays

REQUIREMENTS:
  first subarray: first half of the elements from the original array
    - if original array length is odd: middle element goes here
  second subarray: second half of the elements from original array

ALGORITHM:
  find middle 
    middle = Math.ceil(array.length / 2)
  first half of array is everything from index 0 to middle
  second half is the rest of the elements
    - middle to the end of array
    - arr.slice(middle)
  return these subarrays in an empty array:
    [first half, second half]
*/

function halvsies(array) {
  var middle = Math.ceil(array.length / 2);
  var firstHalf = array.slice(0, middle);
  var secondHalf = array.slice(middle);

  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
