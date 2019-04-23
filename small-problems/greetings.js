/*

> greet('howdy', 'Joe');
Howdy, Joe!
> greet('good morning', 'Sue');
Good morning, Sue!


> sayHello('Brandon');
Hello, Brandon!
> sayHi('Sarah');
Hi, Sarah!

*/

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

function greet(greeting, name) {
  var capitalized = greeting.charAt(0).toUpperCase() + greeting.slice(1);
  var message = capitalized + ', ' + name;
  console.log(message);
}

var sayHi = partial(greet, 'hi');
var sayHello = partial(greet, 'hello');

greet('howdy', 'Joe');
greet('good morning', 'Sue');

sayHi('Sarah');
sayHello('Brandon');