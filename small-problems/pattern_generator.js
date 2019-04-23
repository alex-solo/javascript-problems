function numStars(number) {
  var lastRowString = '';
  var width;

  for (var i = 1; i <= number; i++) {
    lastRowString += String(i);
  }

  width = lastRowString.length - 1;
  return width;
}

function generatePattern(number) {
  var counter = 1;
  var string = ''
  var stars = numStars(number);

  do {
    string += counter;
    console.log(string + '*'.repeat(stars));
    counter += 1;

    if (counter > 9) {
      stars -= 2;
    } else {
      stars -= 1;
    }

  } while (counter <= number);
}

generatePattern(6);