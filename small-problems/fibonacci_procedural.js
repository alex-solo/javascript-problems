// create empty array
// f1 = 1, f2 = 1
// for loop until infinity 
// sum = f1 + f2
// f1 = f2
// f2 = sum
// break out of loop when count of array is nth

function fibonacci(nth) {
  var previousTwo = [1, 1];
  var i;

  for (i = 3; i <= nth; i += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(100));      // 354224848179261915075