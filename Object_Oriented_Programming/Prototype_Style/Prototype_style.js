var animal = {
	eats: true
};
var rabbit = {
	jumps: true
};
rabbit.__proto__ = animal;
alert(rabbit.eats);
alert(rabbit.jumps);
