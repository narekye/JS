// JavaScript source code
var app = angular.module("mode", []);
app.controller("cont", function ($scope) {
	$scope.name = "John";
	$scope.change = function () {
		$scope.name = "Bob";
	};
});