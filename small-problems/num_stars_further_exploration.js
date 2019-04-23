function numStars(number) {
  var stars;

  if (number < 10) {
    stars = number - 1;
  } else {
    stars = 10 + (number - 10) * 2;
  }

  return stars;
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

generatePattern(20);