/*
NOTES:
  todoList:
    - collection of todo objects
    - interface for manipulating the collection of objects
    - maintains integrity of collection - returns only a copy of collection (users cannot manipulate collection directly)
  
    OPERATIONS:
      - maintains collection of todo objects 
      - todoList.add(obj) => adds object to a collection
      - todoList.delete(obj) => removes object from a collection
      - todoList.init(array) => initialize with array  of todo objects
      - todoList.update(obj) => 
      - todoList.getTodo(id) => returns specified object by id
  
  todoManager:
    returns a set of todos from a todoList (object that has a collection of todo objects) based on criteria
  
    - interfaces with todoList object
    - has methods that query the todoList to return all or subset of todo objects as an array
  
    todoManager.returnAll() => [{}, {}, {}, {}, {}]
    todoManager.completed() => [{}, {}]
    todoManager.isWithinMonthYear(month, year)
    todoManager.completedWithinMonthYear(month, year)
*/

var todoData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};

var todoData2 = {
  title: 'Buy Apples',
  month: '',
  year: '2017',
  description: 'An apple a day keeps the doctor away',
};

var todoData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
};

var todoData4 = {
  title: 'Buy Veggies',
  month: '',
  year: '',
  description: 'For the daily fiber needs',
};

var todoData5 = {
  title: 'Do homework',
  month: '1',
  year: '2017',
  description: 'Recipe for success',
};

var todoData6 = {
  title: 'Work out',
  month: '1',
  year: '2017',
  description: 'Feel better',
};

var todoData7 = {
  title: 'Pick up Joe',
  month: '1',
  year: '2017',
  description: '',
};

var todoSet = [todoData1, todoData2, todoData3, todoData4];

var todoList = function() {
  var list = [];

  return {
    init: function(array) {
      var id;
      array.forEach(function(todoObj, idx) {
        id = idx + 1;
        var newTodo = new Todo(todoObj, id);
        list.push(newTodo);
      })

      return this;
    },

    add: function(todoObj) {
      var id = this.biggestId() + 1;
      var newTodo = new Todo(todoObj, id);
      list.push(newTodo);
      return newTodo;
    },
  
    delete: function(id) {
      var todo = this.getTodo(id);
      var idx = list.indexOf(todo);
      list.splice(idx, 1);
    },

    update: function(id, todoObj) {
      var todo = this.getTodo(id);
      Object.getOwnPropertyNames(todoObj).forEach(function(prop) {
        todo[prop] = todoObj[prop];
      })
      return todo;
    },
  
    getTodo: function(id) {
      return list.find(function(todo) {
        return todo.id === id;
      });
    },

    getList: function() {
      var copy = Object.create(Object.getPrototypeOf(list));

      Object.getOwnPropertyNames(list).forEach(function(prop) {
        copy[prop] = list[prop];
      })

      return copy;
    },

    biggestId: function() {
      var ids = list.map(function(todo) {
        return todo.id;
      });

      return Math.max.apply(null, ids);
    },
  };
}();

var TodoManager = function(todoList) {
  this.returnAll = function() {
    return todoList.getList();
  };

  this.completed = function() {
    return this.returnAll().filter(function(todo) {
      return todo.completed;
    });
  };
  
  this.isWithinMonthYear = function(month, year) {
    return this.returnAll().filter(function(todo) {
      return todo.isWithinMonthYear(month, year);
    });
  };

  this.completedWithinMonthYear = function(month, year) {
    return this.completed().filter(function(todo) {
      return todo.completed;
    });
  };
};

var Todo = function(obj, id) {
  this.id = id;
  this.title = obj.title;
  this.completed = obj.completed || false;
  this.month = obj.month;
  this.year = obj.year;
  this.description = obj.description;
}

Todo.prototype.isWithinMonthYear = function(month, year) {
  return this.month === month && this.year === year;
}

todoList.init(todoSet);
var todoManager = new TodoManager(todoList);

// Add a todo item
console.log(todoManager.returnAll()); // 4 element array
todoList.add(todoData5);
todoList.add(todoData6);
console.log(todoManager.returnAll()); // 6 element array

// Retrieve todo object based on its id
console.log(todoList.getTodo(2)); // returns todo object
console.log(todoList.getTodo(9)); // returns undefined

// Delete a todo item
console.log(todoManager.returnAll()); // 6 element array
todoList.delete(1);
console.log(todoManager.returnAll()); // 5 element array
todoList.add(todoData1);              // add back the deleted todo

// Test update method
todoData5.completed = true;
todoData6.completed = true;

todoList.update(5, todoData5);
todoList.update(6, todoData6);

console.log(todoManager.returnAll()); // 6 element array with 2 completed todos

// Test isWithinMonthYear method
todoList.add(todoData7);
console.log(todoManager.isWithinMonthYear('1', '2017')); // 4 element array
console.log(todoManager.isWithinMonthYear('1'));         // []
console.log(todoManager.isWithinMonthYear());            // []
console.log(todoManager.isWithinMonthYear('', '2017'));  // 1 element array

// Test completedWithinMonthYear method
console.log(todoManager.completedWithinMonthYear('1', '2017')); // 2 element array

// Test completed method
todoData4.completed = true;
todoList.update(4, todoData4);
console.log(todoManager.completed());   // 3 element array
