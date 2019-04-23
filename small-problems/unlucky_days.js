/*
input: year (number)
output: # of occurences of day of the week = Friday and date = 13


ALGORITHM:
result count = 0

- step through the days one at a time (1-365)
  - create date object 
  - new Date(year, 0, i)
- check if day is friday the 13th
  - // Sunday - Saturday : 0 - 6
  - date.getDay(); => friday = 5
  - date.getDate();
- if day is friday the 13th add 1 to result count
- after iteration, return result


var start = new Date(1986, 1, 1 + i); // 1962-07-07

*/

function fridayThe13ths(year) {
  var DAYS_PER_YEAR = 365;
  var count = 0;
  var date;
  var i;

  for (i = 1; i <= DAYS_PER_YEAR; i += 1) {
    date = new Date(year, 0, i);
    if (date.getDay() === 5 && date.getDate() === 13) {
      count += 1;
    } else {
      continue;
    }
  }

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2