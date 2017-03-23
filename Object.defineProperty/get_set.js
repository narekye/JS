// adding with descriptor getter and setter
var user = {
	firstname: "Bob";
	lastname: "Drezgic";
};
Object.defineProperty(user, Fullname, {
	// getter
	get: function () {
		return this.firstname + ' ' + lastname;
	},
	// setter
	set: function (value) {
		var split = value.split(' ');
		this.firstname = split[0];
		this.lastname = split[1];
	}
});
alert(user.Fullname);
// getters and setters can be without Object.defineProperty() function.
var suser = {
	firstname: "John",
	lastname: "Connor",
	get fullName() {
		return this.firstname + ' ' + lastname;
	},
	set fullName(value) {
		var split = value.split(' ');
		this.firstName = split[0];
		this.surname = split[1];
	}
}
alert(suser.fullName);
suser.fullName = "Alice Drezgic";