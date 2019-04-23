var scores;
var total = 0;
var avg;
var grade = 'F';

scores = prompt("How many scores would you like to calculate your grade for?")

for(var i = 1; i <= scores; i++) {
  total += parseInt(prompt("Enter score " + i));
}

avg = average(total, scores);

function average(total, num) {
  return total / num;
}

if (avg >= 90) {
  grade = 'A';
} else if (avg >= 70) {
  grade = 'B';
} else if (avg >= 50) {
  grade = 'C';
}

console.log("Based on your " + scores + " scores, your grade is " + grade);