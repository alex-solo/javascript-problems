function sum(num_arr) {
  var answer = 0;

  for (var i = 0; i < num_arr.length; i++) {
    answer += num_arr[i];
  }

  return answer;
}

function product(num_arr) {
  var answer = 1;

  for (var i = 0; i < num_arr.length; i++) {
    answer *= num_arr[i];
  }

  return answer;
}

var integer = parseInt(prompt('Please enter an integer greater than 0'));
var operation = prompt('Enter "s" to compute the sum, or "p" to compute the product');
var num_arr = [];
var i;

var string = (operation === 's' ? 'sum' : 'product');

for (i = 1; i <= integer; i++) {
  num_arr.push(i);
}

answer = (operation === 's' ? sum(num_arr) : product(num_arr));

console.log('The ' + string + ' of integers between 1 and ' + integer + ' is ' + answer);