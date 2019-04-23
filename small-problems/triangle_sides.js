/*
input: lengths of three sides of a triangle (3 numbers)
output: string based on rules*

*RULES/REQUIREMENTS:
- TO BE VALID:
    2 shortest sides summed > longest side AND every side greater than 0
- if all 3 sides are equal
    'equilateral'
- if two sides are equal in length, while third is different
    'isosceles'
- if all 3 sids are different
    'scalene'

ALGORITHM:
- sort array of sides from smallest to longest
- if any number in args is <= 0 return invalid
- if first two lenghts summed < third length return invalid
- check if triangle is equilateral:
  - 'every' method
- check if isosceles
  - if arr[1] === arr[2]
- else
  'scalene'

*/

function noZeros(array) {
  if (array.indexOf(0) === -1) {
    return true;
  }
}

function equilateral(array) {
  return array.every(function (elem, index) {
    return array[0] === array[index];
  });
}

function invalid(array) {
  return !noZeros || !((array[0] + array[1]) > array[2]);
}

function triangle(side1, side2, side3) {
  var sides = [side1, side2, side3].sort(function (a, b) {
    return a - b;
  });

  if (invalid(sides)) {
    return 'invalid';
  }

  if (equilateral(sides)) {
    return 'equilateral';
  } else if (sides[1] === sides[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"