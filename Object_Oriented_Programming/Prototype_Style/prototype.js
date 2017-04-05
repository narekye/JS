var animal = {
	eats:true
};
var rabbit = {
	jumps: true,
	__proto__: animal
};
for (var key in rabbit) {
	alert("Key " + rabbit[key]);
}
