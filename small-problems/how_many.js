/*
input: array of elements
output: logging of each element => number of occurences

use arrays? [[car, 4], [truck, 3], ...]
use object? {car: 4, truck: 3, ... }

ALGORITHM:

- create empty object
- iterate through array
- if element exists in object
  - add one to its count
- if doesnt exist set that element to have count of zero

- iterate through keys of object
- at each iteration output key and value pair


*/

function countOccurrences(array) {
  var result = {};

  array.forEach(function (element) {
    result[element] = result[element] || 0;
    result[element] += 1;
  })

  Object.keys(result).forEach(function (key) {
    console.log(key + ' => ' + result[key]);
  })

}


var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
car => 4 
truck => 3
SUV => 1
motorcycle => 2