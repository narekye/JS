function CoffeeMachine(power) {
	this.wateramount = 0;
	alert("Wateramount" + wateramount);
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
var coffeemachine = new CoffeeMachine(100);
coffeemachine.run();
