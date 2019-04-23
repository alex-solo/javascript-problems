function dateSuffix(num) {
  var suffix;

  if (num % 10 === 1) {
    suffix = 'st';
  } else if (num % 10 === 2) {
    suffix = 'nd';
  } else if (num % 10 === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return String(num) + suffix;
}

function formattedDate(date) {
  console.log('Today\'s date is: ' + formattedMonth(date) + ', ' + formattedDay(date));
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()] + ' the ' + dateSuffix(date.getDay());
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return months[today.getMonth()];
}

var today = new Date('May 9, 2018 18:19:00');
formattedDate(today);

var tomorrow = today;
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

var nextWeek = new Date(today.getTime);
nextWeek.setDate(nextWeek.getDate() + 7);

console.log(nextWeek.toDateString() === today.toDateString());
