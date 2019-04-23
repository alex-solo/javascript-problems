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
*/

function makeList() {
  var items = [];

  var list = {
    list: function() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(function (item) {
          console.log(item);
        })
      }
    },

    add: function(item) {
      items.push(item);
      console.log(item + ' added!');
    },

    remove: function(item) {
      items.splice(items.indexOf(item), 1);
      console.log(item + ' removed!');
    },

    clear: function() {
      items = [];
      console.log('All items removed.')
    },
  }

  return list;
}

var list = makeList();

list.add('peas');
list.add('corn');
list.list();

list.remove('corn');
list.list();
list.clear();
list.list();