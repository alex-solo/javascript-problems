function keysMatch(object1, object2) {
  object1Keys = Object.keys(object1).sort();
  object2Keys = Object.keys(object2).sort();

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  return object1Keys.every(function(key, index) {
    return key === object2Keys[index]; 
  });
}

function valuesMatch(object1, object2) {
  var object1Keys = Object.getOwnPropertyNames(object1).sort();
  var key;

  return object1Keys.every(function(key) {
    return object1[key] === object2[key];
  });
}

function objectsEqual(object1, object2) {
  if (object1 === object2) {
    return true;
  }

  return (keysMatch(object1, object2) && valuesMatch(object1, object2));
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false