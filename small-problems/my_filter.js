function myFilter(values, func) {
  var result = [];

  values.forEach(function (element) {
    if (isMultipleOfThreeOrFive(element)) {
      result.push(element);
    }
  });

  return result;
}

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

var isMultipleOfThreeOrFive = function (value) {
  return value % 5 === 0 || value % 3 === 0;
};

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));  // [ 3, 5, 18, 15 ]