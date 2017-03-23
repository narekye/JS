function User(firstname, lastname) {
	var phrase = "Hello ";
	function getFullName() {
		return firstname + ' ' + lastname;
	}
	this.sayHi = function () {
		alert(phrase + ", " + getFullName());
	}
}
var user = new User("Jim", "Carry");
user.sayHi();