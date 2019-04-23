var bill = parseFloat(prompt('What is the bill?'));
var tipPercent = parseFloat(prompt('What is the tip?'));

var tipAmount = (tipPercent / 100) * bill;
var total = (bill + tipAmount);

console.log('The tip is $' + tipAmount.toFixed(2));
console.log('The total is $' + total.toFixed(2));