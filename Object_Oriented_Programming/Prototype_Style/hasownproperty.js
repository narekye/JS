var animal = {
	eats: true
};
var rabbit = {
	jumps: true
};
alert(rabbit.hasOwnProperty("jumps")); // true
alert(rabbit.hasOwnProperty("eats")); // false
