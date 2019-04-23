function gregorianLeapYear(year) {
  var answer;

  if (year % 4 === 0 && year % 100 !== 0) {
    answer = true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

function isLeapYear(year) {
  var answer;

  if (year < 1752) {
    answer = (year % 4 === 0);
  } else {
    answer = gregorianLeapYear(year);
  }

  console.log(answer);
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true