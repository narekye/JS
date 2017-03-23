// JavaScript source code
var user = {firstname: "Jim"};
var admin = { firstname: "Alice" };
function func() {
	alert(this.firstname);
}
user.f = func;
admin.f = func;
// call method
user.func();
admin.func();