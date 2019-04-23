/*
input: integer (number of switches/number of passes)
output: array*

RULES/REQUIREMENTS:
- final array is switches that are turned on
- on every pass toggle switch that is a multiple of that pass number
- do n passes
- array at the end represents switches that are on

DATA STRUCTURE:
    0      1    2      3     4
- [true, true, true, true, true, ...]
- ex. pass 2, start at index 1
- if index + 1 % pass + 1 === 0 then toggle

ALGORITHM:
- create array of booleans (n * true)
- this represents first pass already completed (so we start iteration from second pass)
- pass = 2

iterate through numbers starting with i = 2 until n - 1:
  - i = switch number
  - at each iteration, transform array 
    - if switch (idnex + 1) % i === 0  
      - toggle at array[index + 1]
filter/transform resulting array:
  - if true, return index + 1

*/

function createArrayOfSwitches(num) {
  var arr = new Array(num);
  var i;

  for (i = 0; i < num; i += 1) {
    arr[i] = false;
  }

  return arr;
}

function lightsOn(numOfSwitches) {
  var switches = createArrayOfSwitches(numOfSwitches);
  var i;

  for (i = 1; i <= numOfSwitches; i += 1) {
    switches.map(function (light, index) {
      if (index + 1 >= i && (index + 1) % i === 0) {
        return switches[index] = !switches[index];
      } else {
        return switches[index];
      }
    })
  }

  return switches.map(function (bool, index) {
    if (bool === true) {
      return index + 1;
    } else {
      return null;
    }
  }).filter(function (elem) {
    return elem !== null;
  });
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]