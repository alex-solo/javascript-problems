var age = parseInt(prompt('What is your age?'), 10);
var retireAt = parseInt(prompt('At what age would you like to retire?'), 10);
var dateObj = new Date();
var currentYear = dateObj.getFullYear();

var difference = retireAt - age;

console.log('It\'s ' + currentYear + '. You will retire in ' + (currentYear + difference) + '.');

// What is your age? 30
// At what age would you like to retire? 70
// 
// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!