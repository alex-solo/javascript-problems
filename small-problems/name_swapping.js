/*
input: string
output: string

REQUIREMENTS:
  - instead of first name, space, last name
    - return last name, comma, space, first name

ALGORITHM:
  - get two element array with first and last names by splitting array at space
  - first name is first element (arr[0])
  - last name is second element (arr[1])
  - return second + ', ' + first

*/

function swapName(string) {
  var nameArr = string.split(' ');
  var firstName = nameArr.slice(0, nameArr.length - 1).join(', ');
  var lastName = nameArr[nameArr.length - 1];

  return lastName + ', ' + firstName;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Alex John Michael Steve Solo'));    // "Roberts, Joe"
