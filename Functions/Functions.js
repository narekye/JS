// JavaScript source code
var user = {
	name: "Jim";
	sayhi: function () {
		alert(this.name);
	}
};
user.sayhi();
// second example
var user1 = {
	name: "Alice";
};
user1.hello = function () {
	alert("hello");
};