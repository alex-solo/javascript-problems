var people = {
  //collection: [me, friend, mom, father],
  collection: [],

  fullName: function (person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  
  rollCall: function () {
    this.collection.forEach(this.fullName);
  },  

  lastUsedIndex: function() {
    var result;

    try {
      result = this.collection.reduce(function (previous, current) {
        return (previous.index > current.index) ? previous.index : current.index;
      })
    }
    catch(e) {
      result = 0;
    }

    return result;
  },
  
  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    var uniqueIndex = this.lastUsedIndex + 1;
    person.index = uniqueIndex;

    this.collection.push(person);
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  getIndex: function(person) {
    var index = -1;
    this.collection.forEach(function (comparator, i) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = i;
      }
    });
    
    return index;
  },

  remove: function(person) {
    var index;
    if (isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    var existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};