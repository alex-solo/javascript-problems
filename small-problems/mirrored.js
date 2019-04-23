function forwardAndBack(array) {
  var resultArr = array;
  var i;

  for (i = array.length - 1; i >= 0; i--) {
    resultArr.push(array[i]);
  }

  return resultArr;
}



var testArr = ['a', 1, 'hi']    // ['a', 1, 'hi', 'hi', 1, 'a']
console.log(forwardAndBack(testArr));


function mirrorArr(array) {
  var reverseArr = array.slice(0).reverse();
  return array.concat(reverseArr);
}



var testArr2 = ['a', 1, 'hi']    // ['a', 1, 'hi', 'hi', 1, 'a']
console.log(mirrorArr(testArr2));
