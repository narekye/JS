$(document).ready(function () {
	$("#divid").load("text.txt", function () {
		if (statusTxt == "succes") {
			alert("Loaded succesfuly.");
		}
		else {
			alert("Unable to load!.");
		}
	});
});