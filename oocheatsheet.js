// declaring object car with its properties
var car = {type:"Mercedes", model:"S550", color:"gold"};
// function that returns the object type and model
function(){
	return this.type + "" + this.model;
}

// creat an object named myCar and give it properties names(anoher way to apply)

var myCar = new Object();// object myCAR
// declaring properties for myCar object
myCar.type = "Mercedes"; 
myCar.model = "S550";
myCar.color = "gold";
myCar.year = "2016";

console.log(myCar);

//defining the object type by writing a constructor function
function Car(make, model, year, owner){
	this.make = make;
	this.model = model;
	this.year = year;
	this.owner = owner; // object owner with properties of Person function
	this.displayCar = displayCar; //function method for Car. Adding methods to prototype
}

// creating an instance of the object. create an mycar object
var mycar = new Car("Toyota", "Camary", "2014");
console.log(mycar);

// create an object property that itself another object

function Person(name,age,email) { // creates object Owner with the properties of name,age, and email
	this.name = name;
	this.age = age;
	this.email = email;
}
//instantiate two new person objects
var first_o = new Person("Yakov Pinhasov", 31, "jack@gmail.com");
var second_o = new Person("Lena Isa", 27, "lena@gmail.com");
// instantiate the new object
var car1 = new Car("B.M.W", "Z6", 2008, second_o);
var car2 = new Car("Audi", "a6", 2016, first_o);
 car2.owner // will display car2 owner info
 car2.color = "white"; // assign property color to car1
// function that format and display the properties of car object
function displayCar() {
  var result = "A Beautiful " + this.year + " " + this.make
    + " " + this.model;
  pretty_print(result);// function to display horizontally
}
// calling displayCar method for car object
car1.displayCar();
car2.displayCar();
//define a getter and setter for the year property
var d = Date.prototype;
Object.defineProperty(d, "year", {
  get: function() {return this.getFullYear() },
  set: function(y) { this.setFullYear(y) }
});