/*
input: array
output: new array with first element at the end of the array

RULES/REQUIREMENTS:
- if input of type NOT array, return undefined
- if input [], return []
- otherwise
  - return new array
  - first element is now last element

ALGORITHM:
- if array is empty return empty array
- if input is of type other than array
-   return undefined
- create a new result array
- isolate first element of array
- isolate remaining elements of array
-    from index 1 to the end
- combine second part and first part to create new array
- return resulting array

ex.
[7, 3, 5, 2, 9, 1]
arr1 = [7]
arr2 = [3, 5, 2, 9, 1]

*/

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  }

  var firstElem = [array[0]];
  var remainingElems = array.slice(1);

  return remainingElems.concat(firstElem);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined
console.log(rotateArray({}));                        // undefined


// the input array is not mutated
var array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]