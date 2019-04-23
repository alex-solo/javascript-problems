/*
RULES:

ROW STARS SPACES
1     1      2
2     3      1
3     5      0
4     3      1
5     1      2

STARS: start at 1, increase by 2 at each row until reach arg integer, then go down by 2 until 1
SPACES: start at Math.floor(n / 2), decrease at each row until 0, then increase by 1 until Math.floor(n / 2)

ALGORITHM:

- stars = 1
- spaces = Math.floor(n / 2)
- iterate from 1 to n
- at each iteration
  - if stars = 5 and spaces = 0 (middle condition)
  - decrease star number by 2 and increase space number by 1
  - else
    - increase star number by 2 and decrease space number by 1
  - at each iteration console.log string:
  - ' '.repeat(number of spaces) + '*'.repeat(number of stars) 

*/

function diamond(integer) {
  var numStars = 1;
  var numSpaces = Math.floor(integer / 2);
  var string = '';
  var decrease = false;
  var i;

  for (i = 1; i <= integer; i += 1) {
    string = ' '.repeat(numSpaces) + '*'.repeat(numStars);
    console.log(string);

    if (decrease) {
      numStars -= 2;
      numSpaces += 1;
    } else {
      numStars += 2;
      numSpaces -= 1;
    }

    if (numStars === integer) {
      decrease = true;
    }
  }
}

diamond(1);
// logs
//*

diamond(3);
// logs
// *
//***
// *

diamond(5);
// logs
//    *
//   ***
//  *****
//   ***
//    *

 diamond(9);
// logs
//    *
//   ***
//  *****
// *******
//*********
// *******
//  *****
//   ***
//    *

diamond(15);