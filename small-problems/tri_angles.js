/*
input: 3 integers (representing angles)
output: string based on rules*

*RULES/REQUIREMENTS:
- sum of 3 angles must be 180
- every angle must be > 0
- IF VALID triangle:
- if one angle is 90
  'right'
- all three angles < 90
  'acute'
- one angle > 90
  'obtuse'

ALGORITHM:
- determine if triangle is valid
  if angle1 + angle2 + angle 3 is 180 then valid
  if angle1 > 0 && angle2 > 0 && angle3 > 0 then valid
- if angle1 or angle2 or angle3 is equal to 90
  return right
- if angle1 and angle2 and angle 3 are less than 90
  return acute
- if angle1 or angle2 or angle3 is greater than 90
  return obtuse

*/

function allNonZero(ang1, ang2, ang3) {
  return ang1 > 0 && ang2 > 0 && ang3 > 0;
}

function validTriangle(ang1, ang2, ang3) {
  return ang1 + ang2 + ang3 === 180 && allNonZero(ang1, ang2, ang3);
}

function typeOfTriangle(ang1, ang2, ang3) {
  if (ang1 === 90 || ang2 === 90 || ang3 === 90) {
    return 'right';
  } else if (ang1 < 90 && ang2 < 90 && ang3 < 90) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

function triangle(ang1, ang2, ang3) {
  if (validTriangle(ang1, ang2, ang3)) {
    return typeOfTriangle(ang1, ang2, ang3);
  } else {
    return 'invalid';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"