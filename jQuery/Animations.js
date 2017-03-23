// JavaScript source code
$(document).ready(function () {
	$("button").click(function () {
		$("div").animate({ left: '250px' });
	});
});
$(document).ready(function () {
	$("button").click(function () {
		var div = $("div");
		div.animate({ fontSize: '3em' }, 5200);
	});
});