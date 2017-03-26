// JavaScript source code
var app = angular.module("mode", []);
app.controller("cont", function ($data) {
	$data.name = "John";
	$data.change = function () {
		$data.name = "<h1>Bob<h1>";
	};
});