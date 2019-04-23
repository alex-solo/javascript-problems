/*
input: 2 arrays of equal length (never empty)
output: one array that contains all elements from argument arrays with each element taken in alternation

Algorithm:
  - create an empty results array []
  - iterate through arr1
  - push two elements at each iteration to results array:
    - push arr1[i];
    - push arr2[i];
  
  EX. [1, 'a', 2, 'b'...]

  - return results array
*/


function interleave(arr1, arr2) {
  var result = [];

  arr1.forEach(function (element, index) {
    result.push(arr1[index]);
    result.push(arr2[index]);
  })

  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
console.log(interleave([1], ['a']));                    // [1, "a"]
