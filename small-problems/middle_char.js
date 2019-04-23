/*
input: non-empty string
output: string (middle char(s))

REQUIREMENTS:
- if sting is odd length, return one middle char
- if string length is even, return two middle chars

ALGORITHM:
- get length of string
- get middle of string 
- if odd
  - return char at length / 2 (floored)
- if even
  - return 2 char slice of string starting at (length / 2 - 1)

*/

function centerOf(string) {
  var length = string.length;
  var middle = (length % 2 === 0 ? (length / 2) - 1 : length / 2);

  if (length % 2 === 0) {
    return string.substr(middle, 2);
  } else {
    return string[Math.floor(middle)];
  }
}

console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // " "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"
console.log(centerOf('Launcho'));           // "n"