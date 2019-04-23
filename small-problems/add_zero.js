function formatHoursMinutes(num) {
  var numString = num.toString();

  if (numString.length === 1) {
    return parseInt('0' + numString);
  }

  return num;
}

function formatTime(dateObj) {
  var hours = formatHoursMinutes(dateObj.getHours());
  var minutes = formatHoursMinutes(dateObj.getMinutes());

  console.log(hours + ':' + minutes); 
}

var today = new Date();
formatTime(today);