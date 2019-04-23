function getIndeces(string, start, end) {
  var tmp;

  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || !!Number(start) === false) {
    start = 0;
  }

  if (end < 0 || !!Number(end) === false) {
    end = 0;
  }

  if (start > end) {
    tmp = start;
    start = end;
    end = tmp;
  }

  return [start, end];
}

function substring(string, start, end) {
  var subString;
  var index;
  var i;
  var startAndEnd = getIndeces(string, start, end);

  start = startAndEnd[0];
  end = startAndEnd[1];

  subString = '';
  for (i = 0; i < string.length; i++) {
    index = start + i;

    if (index === end || index === string.length) {
      break;
    }

    subString += string[index];
  }

  console.log(subString);
}

var string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"