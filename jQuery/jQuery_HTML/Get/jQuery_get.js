// text() - Sets or returns the text content of selected elements
// html() - Sets or returns the content of selected elements (including HTML markup)
// val() - Sets or returns the value of form fields
//==================================================================================
// alerts the text of id=test element 
$(document).ready(function () {
	$("#button1").click(function () {
		alert("Text is: " + $("#test").text());
	});
	$("#button2").click(function () {
		alert("HTML markup is: " + $("#test").html());
	});
	$("#button3").click(function () {
		alert("Inputed text is: " + $("#inp").val());
	});
});

