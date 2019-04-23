function runningTotal(array) {
  var total = 0;

  var totalsArr = array.map(function(num) {
    return total += num;
  });

  return totalsArr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []