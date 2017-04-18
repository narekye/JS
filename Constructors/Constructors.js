// JavaScript source code
// In JS ctor can called any method which called my new keyword
// such like this.
function Animal(name) {
	// this = {};
	this.name = name;
	this.canWalk = true;
	// return this;
}
var animal = new Animal("Dog");
// or that simple example.
var animal2 = new function {
	this.name = "Cat";
	this.canWalk = true;
}
// functions in constructors.
function User(name) {
	this.name = name;
	this.sayHi = function () {
		alert("my name is " + this.name);
	}
}
var nuser = new User("Jim");
nuser.sayHi(); 
