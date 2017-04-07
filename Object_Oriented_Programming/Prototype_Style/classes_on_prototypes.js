function Animal(name) = {
	this.name = name;
	this.speed = 0;
};

Animal.prototype.run = function (speed) {
	this.speed += speed;
	alert("The animal runs " + this.speed + "speed");
};
Animal.prototype.stop = function () {
	this.speed = 0;
}
