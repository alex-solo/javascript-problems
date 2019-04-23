function shortLongShort(string1, string2) {
  var shortStr = (string1.length < string2.length ? string1 : string2);
  var longStr = (shortStr === string1 ? string2 : string1);
  var finalStr = shortStr + longStr + shortStr;

  console.log(finalStr);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
