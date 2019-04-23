function Person(name, lastName, age, gender) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.name + ' ' + this.lastName;
};

Person.prototype.eat = function() {
  console.log('Eating');
};

Person.prototype.communicate = function() {
  console.log('Communicating');
};

Person.prototype.sleep = function() {
  console.log('Sleeping');
};

function Doctor(name, lastName, age, gender, specialization) {
  Person.call(this, name, lastName, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}
Doctor.prototype.constructor = Doctor;

function Professor(name, lastName, age, gender, subject) {
  Person.call(this, name, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.teach = function() {
  console.log('teaching');
}
Professor.prototype.constructor = Professor;

function Student(name, lastName, age, gender, degree) {
  Person.call(this, name, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function() {
  console.log('Studying');
};
Student.prototype.constructor = Student;

function GraduateStudent(name, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, name, lastName, age, gender, degree);
  this.degree = degree;
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function() {
  console.log('Researching');
};
GraduateStudent.prototype.constructor = GraduateStudent;

var person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

var doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();   

var professor = new Professor('foo', 'bar', 36, 'gender', 'Chemistry');                      // logs 'Diagnosing'
professor.teach();


var graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student); 
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
