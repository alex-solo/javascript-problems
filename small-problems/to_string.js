function toString(array) {
  var i;
  var string = ''

  for (i = 0; i < array.length; i++) {
    string += String(array[i]);
  }

  console.log(string);
}

toString(['hi', 43, 'ghiop', '9', 1112]);