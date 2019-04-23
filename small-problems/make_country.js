var COUNTRIES_AND_CONTINENTS = {'South America': ['The Republic of Chile'], 
                                'North America': ['Canada'],
                                'Africa': ['The Republic of South Africa']};

function getContinent(name) {
  var i;
  var continent;
  var continentArray = Object.keys(COUNTRIES_AND_CONTINENTS);


  continentArray.forEach(function (possibleContinent) {
    if (COUNTRIES_AND_CONTINENTS[possibleContinent].indexOf(name) !== -1) {
      continent = possibleContinent;
    }
  })

  return continent;
}

function makeCountry(name, visited) {
  if (visited === undefined) {
    visited = false;
  }

  var continent = getContinent(name);
  var countryObj = {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      var visitedString = this.visited ? 'have' : 'haven\'t';
      return this.name + ' is located in ' + this.continent + '. I ' + visitedString + ' visited ' + this.name + '.';
    },

    visitCountry: function() {
      this.visited = true;
    }
  }

  return countryObj;
}

var chile = makeCountry('The Republic of Chile');
var canada = makeCountry('Canada');
var southAfrica = makeCountry('The Republic of South Africa');

console.log(chile);
console.log(chile.getDescription());
chile.visitCountry(); 
console.log(chile.getDescription());

// var chile = {
//   name: 'The Republic of Chile',
//   continent: 'South America',
//   getDescription: function() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };
// 
// var canada = {
//   name: 'Canada',
//   continent: 'North America',
//   getDescription: function() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };
// 
// var southAfrica = {
//   name: 'The Republic of South Africa',
//   continent: 'Africa',
//   getDescription: function() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };