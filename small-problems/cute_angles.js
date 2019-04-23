/*
input: floating point number
output string 'degrees°minutes\'seconds"'


Algorithm:
ex: 76.73
- degrees = angle whole number (Math.floor) => 76
- minutes and seconds are: angle - degrees => (76.73 - 76) * 60 = 43.8
- minutes = whole number of minutes and seconds (Math.floor) => 43
- seconds = (minutes and seconds - minutes) * 60 (floored)
- concat as strings to result string ('')

*/

function formatString(string) {
  if (string.length === 1) {
    return '0' + string;
  }

  return string;
}


function dms(angle) {
  var string = '';
  var degrees = String(Math.floor(angle));
  var minutesAndSeconds = String((angle - degrees) * 60);
  var minutes = String(Math.floor(minutesAndSeconds));
  var seconds = String(Math.floor((minutesAndSeconds - minutes) * 60));


  return string += degrees + '°' + formatString(minutes) + '\'' + formatString(seconds) + '"';
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(50.00));         // 50°00'00"