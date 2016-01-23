
// Define the Person constructor
var Person = function(firstName, gender, email, phonNumber) {
  this.firstName = firstName;
  this.gender = gender;
  this.phonNumber = phonNumber;
  this.email = email;
};

// Add methods to Person.prototype

Person.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName + "And My Gender Is :  " + this.gender + " My email:" + this.email);
};

Person.prototype.teaching = function(){
  console.log("Hello, I'm " + this.firstName + "And My contact information is: " + this.email + this.phonNumber );
};

// Define the Student constructor
function Student(firstName, gender, email, phonNumber, subject) {
  // Call the parent constructor
  Person.call(this, firstName, gender, email, phonNumber);

  // Initialize Student-specific properties
  this.subject = subject;
}

// Define the Teacher constructor
function Teacher(firstName, gender ,email, phonNumber, teachingSubject, yearsOfTeaching){
  // Call the parent constructor
  Person.call(this, firstName, gender,email, phonNumber);
   // Initialize Professor-specific properties
  this.teachingSubject = teachingSubject;
  this.yearsOfTeaching = yearsOfTeaching;
}

function School() {
  this.school = [];
  this.addSchools = function(Person){
    this.school.push(Person);
  }
}

// Create a Student.prototype object that inherits from Person.prototype.

Student.prototype = Object.create(Person.prototype);

// Set the "constructor" property to refer to Student
Student.prototype.constructor = Student;

// Create a Student.prototype object that inherits from Person.prototype.
Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;

// Replace the "sayHello" method
Student.prototype.sayHello = function(){
  console.log("Hello, I'm " + this.firstName + " My gender Is:" + this.gender + "Email: " +  this.email + ". I'm studying "
              + this.subject + ".");
};

Teacher.prototype.teaching = function(){
  console.log("Hello, my name is Teacher " + this.firstName + " You can reach me at : " + this.email + " and my phone is : "  + this.phonNumber  + " I am Teaching " + " , " + this.teachingSubject + "  for " + this.yearsOfTeaching +  " years");
};


var student1 = new Student("Lissa", "Female", "Lissa@gmail.com" ,"718-245-879", "Applied Physics");
var teacher1 = new Teacher("David","Male", "davidstar@gmail.com" , "917-999-2962", "Physics", 20);
Queens = new School();

Queens.addSchools(student1);
Queens.addSchools(teacher1);

student1.sayHello();
teacher1.teaching();

console.log(Queens.school[0]);
console.log(Queens.school[1]);
