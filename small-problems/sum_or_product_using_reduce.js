function sum(num_arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return num_arr.reduce(reducer);
}

function product(num_arr) {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return num_arr.reduce(reducer);
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