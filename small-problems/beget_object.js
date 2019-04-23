var foo = {
  a: 1,
};

Object.prototype.begetObject = function() {
  function F() {}
  F.prototype = this;
  return new F();
}

var bar = foo.begetObject();
foo.isPrototypeOf(bar);         // true