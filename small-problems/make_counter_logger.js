function makeCounterLogger(number) {
  return function(endNum) {
    if (endNum > number) {
      for (var i = number; i <= endNum; i += 1) {
        console.log(i)
      }
    } else {
      for (var i = number; i >= endNum; i -= 1) {
        console.log(i);
      }
    }    
  };
}

var countlog = makeCounterLogger(5);

countlog(8);
console.log('------')
countlog(2);