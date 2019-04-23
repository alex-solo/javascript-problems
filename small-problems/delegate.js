var foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

function delegate(obj, method) {
  var args = Array.prototype.slice.call(arguments, 2);
  return function() {
    return obj[method].apply(obj, args);
  }
}

var baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'