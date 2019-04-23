function gcd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1
