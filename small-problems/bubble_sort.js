// use a switch (swapped = false)
// do/while loop (while swapped = true)
// inside the do while loop, for loop iterating through elements in the array

function bubbleSort(array) {
  var swapped;
  var i;
  var temp;

  do {
    swapped = false;
    for (i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped === true);

  return array;
}

var array = [5, 3];
console.log(bubbleSort(array));
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
console.log(bubbleSort(array));
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(bubbleSort(array));
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]