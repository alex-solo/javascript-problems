function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  };
}

var multiplyBy5 = makePartialFunc(multiply, 5);
var subtract10 = makePartialFunc(subtract, 10);

// This behavior is made possible by closures. When a new function is created, 
// it retains access to all of the references visible to it in the lexical location of its creation.

multiplyBy5(100); // 500
subtract10(30); // 20