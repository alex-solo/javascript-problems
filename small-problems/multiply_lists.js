/*
input: 2 arrays (same number elements)
output: new array*

*Rules/Requirements
  - each element is product of each pair of nums from args that have same index
  ex. 3*9, 5*10....

ALGORITHM:
  - transform array1 (map)
    - pass element, and index
    - return array1 at index * array2 at index
*/


function multiplyList(arr1, arr2) {
  return arr1.map(function (number, index) {
    return arr1[index] * arr2[index];
  });
}


console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
