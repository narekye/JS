function Machine() {
	var enabled = false;
	this.enable = function () {
		enabled = true;
	};
	this.disable = function () {
		enabled = false;
	};
}
function CoffeeMachine(amount) {
	Machine.call(this);
	var wateramount = 0;
	this.setWaterAmount = function (amount) {
		wateramount = amount;
	};
}

var coffemachine = new CoffeeMachine(200);
coffemachine.enable();
coffemachine.setWaterAmount = 300;
coffemachine.disable();