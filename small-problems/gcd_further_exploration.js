// find the smaller number of the two
// if num1 is smaller than num2 
  // smallest = num1
  // else num2

// for loop starting with i = smallest and i--
// return number if both num2 % i and num1 % i === 0

function gcd_pair(num1, num2) {
  var smallest;
  var gcd;

  if (num1 < num2) {
    smallest = num1;
  } else {
    smallest = num2;
  }

  for(var i = smallest;; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
      break;
    }
  }

  return gcd;
}

function gcd(array) {
  var gcd;

  while (array.length > 2) {
    var num1 = array.shift();
    var num2 = array.shift();
    gcd = gcd_pair(num1, num2);
    array.push(gcd);
  }

  console.log(gcd);
}



gcd([12, 4, 8]);   // 4