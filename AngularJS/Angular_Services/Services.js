// JavaScript source code
console.log('opened');
var app = angular.module('modde', []);
app.controller('myCtrl', function($scope, $location){
	$scope.absurl = $location.absurl();
});