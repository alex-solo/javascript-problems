function century(year) {
  var century = year / 100;
  var ending = '';
  var testAgainst;
  var th = ['0', '4', '5', '6', '7', '8', '9', '11', '12', '13'];

  if (year % 100 !== 0) {
    century += 1;
  }

  century = String(parseInt(century));

  if (th.includes(century.slice(-1))) {
    ending = 'th';
  } else if (century.slice(-1) === '1') {
    ending = 'st';
  } else if (century.slice(-1) === '2') {
    ending = 'nd';
  } else if (century.slice(-1) === '3') {
    ending = 'rd';
  }

  if (th.includes(century.slice(-2))) {
    ending = 'th'
  }

  console.log(century + ending);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"