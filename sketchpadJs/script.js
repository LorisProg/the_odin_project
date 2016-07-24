var contWidth = $(".container").width();
var contHeight = $(".container").height();

$(document).ready(function() {

	fillCont(16);

	$("#clear").click(function() {
		clearCont();
		fillCont(prompt("Choose how many squares per side the new grid will be"));
	});


});


var clearCont = function() {
		
	$(".container").html("");

};

var fillCont = function(size) {
	var i = 1;

	for (i = 1; i <= size; i++) {
		$(".container").append("<ul></ul>");
	}

	for (i = 1; i <= size; i++) {
		$("ul").append("<li></li>");
	}

	$("li").width(contWidth / size);
	$("li").height(contHeight / size);

	$("li").hover(function() {
		$(this).css("background-color", "red");
	});
};


