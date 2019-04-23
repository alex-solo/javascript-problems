function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info: function() {
      console.log(this.name + ' is a ' + this.year + ' year student.');
    },

    listCourses: function() {
      return this.courses;
    },

    addCourse: function(object) {
      this.courses.push(object);
    },

    addNote: function(courseCode, note) {
      var course = this.courses.filter(function(course) {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course['note']) {
          course['note'] += '; ' + note;
        } else {
          course['note'] = note;
        }
      }
    },

    viewNotes: function() {
      this.courses.filter(function(course) {
        return course['note'];
      }).forEach(function(course) {
        console.log(course['name'] + ': ' + course['note']);
      })
    },

    updateNote: function(courseCode, note) {
      var course = this.courses.filter(function(course) {
        return course.code === courseCode;
      })[0];

      if (course) {
        course['note'] = note;
      }
    },
  };
}

// foo = createStudent('Foo', '1st');
// foo.info();
// 
// foo.listCourses();
// 
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// //foo.viewNotes();
// 
// foo.addNote(102, 'Difficult subject');
// //foo.viewNotes();
// 
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();

var foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
};

var bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
};

var qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
};

var school = {
  students: [],

  addStudent: function(name, year) {
    var student;

    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid year');
    }
  },

  enrollStudent: function(student, courseName, courseCode) {
    student.addCourse({ name: courseName, code: courseCode });
  },

  addGrade: function(student, courseName, grade) {
    var course = student.listCourses().filter(function(course) {
      return course.name === courseName
    })[0];

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard: function(student) {
    var courses = student.listCourses();
    courses.forEach(function(course) {
      console.log(course.name + ': ' + (course.grade ? course.grade : "In Progress"));
    })

    console.log('------------')
  },

  courseReport: function(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(function(course) {
        return course.name === courseName;
      })[0];
    }

    var courseStudents = this.students.map(function(student) {
      var course = getCourse(student, courseName) || { grade: undefined };
      return {name: student.name, grade: course.grade};
    }).filter(function(student) {
      return student.grade;
    });

    if (courseStudents.length > 0) {
      console.log('=' + courseName + ' Grades=');

      var average = courseStudents.reduce(function(total, student) {
        return total + student.grade;
      }, 0) / courseStudents.length;

      courseStudents.forEach(function(student) {
        console.log(student.name + ': ' + String(student.grade));
      })

      console.log('-------');
      console.log('Course Average: ' + String(average));
    }
  },
}

var foo = school.addStudent('foo', '3rd');
var bar = school.addStudent('bar', '1st');
var qux = school.addStudent('qux', '2nd');

school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);

school.enrollStudent(bar, 'Math', 101);

school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);

school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);

school.addGrade(bar, 'Math', 91);

school.addGrade(qux, 'Math', 93);
school.addGrade(qux, 'Advanced Math', 90);

school.getReportCard(foo);
school.getReportCard(bar);
school.getReportCard(qux);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
