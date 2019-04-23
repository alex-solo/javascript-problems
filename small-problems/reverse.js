function reverse(inputForReversal) {
  var reversed = (typeof(inputForReversal) === 'string' ? '' : []);
  var startIndex = inputForReversal.length - 1;
  var i;

  for (i = startIndex; i >= 0; i--) {
    if (typeof(inputForReversal) === 'string') {
      reversed += inputForReversal[i];
    } else {
      reversed.push(inputForReversal[i]);
    }
  }

  return reversed;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
array;                      // [1, 2, 3]