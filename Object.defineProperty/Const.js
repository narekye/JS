// JavaScript source code
var user = {};
user.name = "Bob";
// const property.
Object.defineProperty(user, "name", { writeable: false, configurable: false });