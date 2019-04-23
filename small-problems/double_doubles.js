function doubleNum(number) {
  var stringNum = String(number);
  var length = stringNum.length;
  var firstHalf = '';
  var secondHalf = '';
  var i;

  for (i = 0; i < length; i++) {
    if (i < length / 2) {
      firstHalf += stringNum[i];
    } else {
      secondHalf += stringNum[i];
    }
  }

  return (firstHalf === secondHalf);
}

function twice(number) {
  if (doubleNum(number)) {
    console.log(number);
  } else {
    console.log(number * 2);
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676