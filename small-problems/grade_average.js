function gradeAverage(grade1, grade2, grade3) {
  return (grade1 + grade2 + grade3) / 3;
}

function getGrade(grade1, grade2, grade3) {
  var average = gradeAverage(grade1, grade2, grade3);
  var letterGrade;

  if (average >= 90 && average <= 100) {
    letterGrade = 'A';
  } else if (average >= 80 && average <= 90) {
    letterGrade = 'B';
  } else if (average >= 70 && average <= 80) {
    letterGrade = 'C';
  } else if (average >= 60 && average <= 70) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F'
  }

  console.log(letterGrade);
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"