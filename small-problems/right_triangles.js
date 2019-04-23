function triangle(width) {
  var numStars = 1;
  var numSpaces = width - numStars;

  do {
    console.log(' '.repeat(numSpaces) + '*'.repeat(numStars));
    numStars += 1;
    numSpaces -= 1;
  } while (numStars < width);
}

triangle(5);
triangle(9);