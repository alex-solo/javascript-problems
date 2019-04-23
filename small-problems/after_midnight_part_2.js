var MILLISECONDS_IN_MINUTE = 60000;
var MINUTES_PER_DAY = 60 * 24;

function afterMidnight(timeStr) {
  var midnight = new Date('1/1/2000 00:00');
  var time = new Date('1/1/2000 ' + timeStr);

  return (time.getTime() - midnight.getTime()) / MILLISECONDS_IN_MINUTE;
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);

  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686