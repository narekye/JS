function Animal(name) = {
	this.name = name;
	this.speed = 0;
};

Animal.prototype.run = function (speed) {
	this.speed += speed;
	alert("The animal runs " + this.speed + "speed");
};
Animal.prototype.stop = function () {
	alert("Animal stopped");
	this.speed = 0;
};
var animal = new Animal("Dog");
alert(animal.speed);
animal.run(5); // animal runs speed = 5;
animal.run(5); // animal runs speed = 10;
animal.stop(); // animal stopped; 