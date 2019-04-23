/*
input: string 
output: integer (register if one of the commands is 'PRINT')

DEFAULT: register: 0
         stack: []

if PRINT => console.log register
if n => register = n
if PUSH => stack.push register
if ADD => num=stack.pop => register += num
if SUB => num=stack.pop => register -= num
if MULT => num=stack.pop => register *= num
if DIV => num=stack.pop => register = Math.floor(register / num)
if MOD => num=stack.pop => register = register % num
if POP => register = stack.pop


*/

function minilang(string) {
  var register = 0;
  var stack = [];
  var instructions = string.split(' ');

  instructions.forEach(function (token) {
    if (String(parseInt(token, 10)) === token) {
      register = parseInt(token, 10);
      return;
    }

    switch (token) {
      case 'PRINT':
        console.log(register);
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'MOD':
        register %= stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
    }
  })
}


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)