var animal = {
	eats: true
};
function Rabbit(name) {
	this.name = name;
	this.__proto__ = animal;
}
var rabbit = new Rabbit("Crole");
alert(rabbit.eats); // it isnt working on IE10
// but there a second variant to define a prototype
var Sanimal = {
	eats: true
};
function SRabbit(name) {
	this.name = name;
}
SRabbit.prototype = Sanimal;
var srabbit = new SRabbit("SCrole");
alert(srabbit.eats); // it will works on all cross platform browners