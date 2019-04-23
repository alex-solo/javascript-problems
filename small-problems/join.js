function join(array, separator) {
  var finalString = '';
  var tempString = '';
  var i;

  for (i = 0; i < array.length; i++) {
    tempString += (String(array[i]) + separator);
    if (i === array.length - 1) {
      tempString = array[i];
    }
    finalString += tempString;
    tempString = '';
  }

  console.log(finalString);
}


join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'