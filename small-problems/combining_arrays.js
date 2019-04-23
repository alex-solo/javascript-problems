/*
input: 2 arrays
output: 1 array of unique values

Algorithm:
- create empty results array
- combine two arrays into 1 (concat?)
- iterate through combined array and push element into results array
  - if that element is not already in the results array
    - if array.indexOf(element) === -1 then push
- return the results array


[].indexOf(1) === -1
[1].indexOf(3) === -1
[1, 3].indexOf(3) === 1

*/

function union(arr1, arr2) {
  var results = [];

  arr1.concat(arr2).forEach(function (element, index, arr) {
    if (results.indexOf(element) === -1) {
      results.push(element);
    }
  })

  return results;
}

console.log(union([1, 3, 5], [3, 6, 9]));                 // [1, 3, 5, 6, 9]
console.log(union(['a', 'b', 'c'], ['d', 'e', 'f']));    // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(union(['a', 'b', 'c'], ['c', 'e', 'b']));    // ['a', 'b', 'c', 'e']
console.log(union([1, 3, 3, 5], [3, 6, 9]));              // [1, 3, 5, 6, 9]
console.log(union([1, 3, 3, 5], [3, 6, 9]));              // [1, 3, 5, 6, 9]
console.log(union([1, 2, 3], []));                         // [1, 2, 3]
