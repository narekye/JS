function CoffeeMachine(power,capacity) {
	this.wateramount = 0;
	alert("Wateramount" + wateramount);
	// setter for wateramount
	this.setwateramount = function (amount) {
		if (amount < 0) {
			throw new Error("Amount must be a + value");
		}
		if (amount > capacity) {
			throw new Error("It can't be.")
		}
		this.wateramount = amount;
	}
	function getBoilTime() {
		return 1000;
	}
	function onReady() {
		alert("Coffee is ready");
	}
	this.run = function () {
		setTimeout(onReady, getBoilTime());
	}
}
var coffeemachine = new CoffeeMachine(100,200);
coffeemachine.run();
// coffeemachine.setwateramount(600) // Error !!!!