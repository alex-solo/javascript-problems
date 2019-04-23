/*
    > var list = makeList();
    > list();
    The list is empty.
    > list('make breakfast');
    make breakfast added!
    > list('read book');
    read book added!
    > list();
    make breakfast
    read book
    > list('make breakfast');
    make breakfast removed!
    > list();
    read book
*/

function makeList() {
  var todos = [];
  return function(instruction) {
    if (instruction === undefined) {
      if (todos.length === 0) {
        console.log('The list is empty.');
      } else {
        todos.forEach(function (item) {
          console.log(item);
        })
      }
    } else {
        if (todos.indexOf(instruction) === -1) {
          todos.push(instruction);
          console.log(instruction + ' added!');
        } else {
          todos.splice(todos.indexOf(instruction), 1);
          console.log(instruction + ' removed!');
        }
    }
  };
}

var list = makeList();

list();
list('read book');
list('do laundry');

list('read book');
list();