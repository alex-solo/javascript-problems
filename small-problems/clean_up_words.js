function cleanUp(text) {
  var resultString = '';
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var i;

  for (i = 0; i < text.length; i++) {
    if (alphabet.indexOf(text[i]) === -1) {
      resultString += ' ';
    } else {
      resultString += text[i];
    }
  }

  resultString = resultString.replace(/\s+/g, ' ');
  console.log(resultString);
}

cleanUp("---what's my +*& line?");    // " what s my line "
