function addSuffix(num) {
  var suffix = '';

  switch (num) {
    case 1:
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    case 6:
      return 'last';
    default:
      suffix = 'th'; 
  }

  return String(num) + suffix;
}

var numbers = [];
var result = '';
var last;
var i;

for (i = 1; i <= 6; i++) {
  numbers.push(prompt('Enter the ' + addSuffix(i) + ' number:'));
}

last = numbers.pop();

var included = function(n) {
  return n === last;
};

console.log(numbers.some(included));

