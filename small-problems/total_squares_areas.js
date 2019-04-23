function totalArea(array) {
  var areas = array.map(function (arr) {
    return arr[0] * arr[1];
  })

  var result = areas.reduce(function (total, area) {
    return total += area;
  })

  return result;
}

function sameValues(arr) {
  return arr[0] === arr[1];
}

function getSquares(array) {
  var filtered = array.filter(sameValues);
  return filtered;
}

function totalSquareArea(array) {
  var squares = getSquares(array);

  return totalArea(squares);
}

// var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
// console.log(totalArea(rectangles));    // 141

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalSquareArea(rectangles));    // 121
