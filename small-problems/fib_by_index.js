function findFibonacciIndexByLength(num) {
  var fibNumArray = [1, 1];
  var fibNumIndex;
  var fibNum;
  var i;

  for (i = 1;;) {
    fibNum = fibNumArray[i] + fibNumArray[i - 1];
    fibNumArray.push(fibNum);
    i += 1;

    if (String(fibNum).length >= num) {
      break;
    }
  }

  console.log(i + 1);
}


findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74