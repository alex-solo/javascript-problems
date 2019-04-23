var unit;
var length;
var width;
var area;
var areaConverted;
var message;
var SQMETERS_TO_SQFEET = 10.7639

unit = prompt('In meters or feet?');
length = parseInt(prompt('What is the length of the room?'));
width = parseInt(prompt('What is the width of the room?'));

area = length * width;
areaConverted = (unit === 'meters' ? area * SQMETERS_TO_SQFEET : area / SQMETERS_TO_SQFEET);

if (unit === 'meters') {
  message = 'The area of the room is ' + area.toFixed(2) + ' squared meters ' + 
  '(' + areaConverted.toFixed(2) + ' squared feet)';
}

if (unit === 'feet') {
  message = 'The area of the room is ' + area.toFixed(2) + ' squared feet ' + 
  '(' + areaConverted.toFixed(2) + ' squared meters)';
}

console.log(message);
