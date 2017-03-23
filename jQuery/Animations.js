// JavaScript source code
$(document).ready(function () {
	$("button").click(function () {
		$("div").animate({ left: '250px'});
	});
});
$(document).ready(function () {
	$("button").click(function () {
		var div = $("div");
		div.animate({ left: '100px' }, "slow");
		div.animate({ fontSize: '3em' }, "slow");
	});
});