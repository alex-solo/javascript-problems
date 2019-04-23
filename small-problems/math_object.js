function radiansToDegrees(radians) {
  return (radians * 180) / Math.PI;
}

var num = -180;

console.log(Math.abs(num));

console.log(Math.sqrt(16777216));

console.log(Math.pow(16, 6));

var a = 50.72;
var b = 49.2;
var c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

function randomNumber(min, max) {
  var tmp = min;
  
  if (max < min) {
    min = max;
    max = tmp;
  }

  Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(randomInt(1, 5));
