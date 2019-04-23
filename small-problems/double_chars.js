/*



*/

function repeater(string) {
  var result = '';

  for (var i = 0; i < string.length; i += 1) {
    result += string[i].repeat(2);
  }

  return result;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""


function doubleConsonants(string) {
var result = '';
var regex = /[aeiou]|\W/i;

  for (var i = 0; i < string.length; i += 1) {
    if (regex.test(string[i])) {
      result += string[i];
    } else {
      result += string[i].repeat(2);
    }
  }

  return result;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

