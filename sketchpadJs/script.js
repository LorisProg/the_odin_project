var contWidth = $(".container").width();
var contHeight = $(".container").height();
var gridSize = 16;

$(document).ready(function() {

	fillCont(gridSize);

	$("#clear").click(function() {
	
		gridSize = prompt("Choose how many squares per side the new grid will be : (default 16)");
		clearCont();
		fillCont(gridSize);
	});

	$("#backColor").click(function () {
		$("li").css("background-color", $("#primary").css("background-color"));
		$("li").css("opacity", 1);
	});


	$("#randomCheck").click(function() {
		colorize();
	});


	$("#opacityCheck").click(function() {
		
		if ($("#opacityCheck").prop("checked")) {
			gradient(0.1);
		}
		else {
			$("li").css("opacity", 1);
			$("li").unbind("mouseenter");
			colorize();
		}
	});

});


var clearCont = function() {
	$(".container").html("");
	$(".gridInfo").html("");
};

var fillCont = function(size) {

	if ( !size ) {
		size = 16;
	}

	var t0 = performance.now();

	var i = 1;

	var grid = "";

	grid = "<ul>" + ("<li></li>").repeat(size) + "</ul>";

	grid = grid.repeat(size);

	/*
	var gridUl = "";

	gridUl = gridUl.concat("<ul>");

		for (i = 1; i <= size; i++) {
			gridUl = gridUl.concat("<li></li>");
		}

	gridUl = gridUl.concat("</ul>");


		for (i = 1; i <= size; i++) {
			grid = grid.concat(gridUl);
		}
	*/

	$(".container").append(grid);

	$("li").width(contWidth / size);
	$("li").height(contHeight / size);

	$("li").css("background-color", $("#primary").css("background-color"));

	colorize();

	$(".gridInfo").append("Current grid size : " + size + "X" + size);

	var t1 = performance.now();
	console.log("fillCont s'est execute en " + Math.floor(t1 - t0) + " millisecondes.");

};


var colorize = function() {

	if ($("#randomCheck").prop("checked")) {
		$("li").mouseenter(function() {
		$(this).css("background-color", '#'+Math.floor(Math.random()*16777215).toString(16)	);
		});
	}
	else {
		$("li").mouseenter(function() {
		$(this).css("background-color", $("#secondary").css("background-color"));
		});
	}
};



var gradient = function(percentage) {

	$("li").unbind("mouseenter");


	$("li").mouseenter(function() {

		if ($(this).css("background-color") !== $("#secondary").css("background-color")) {
			$(this).css("opacity", 0);
		}

		$(this).css("opacity", (parseFloat($(this).css("opacity")) + percentage).toString());
	});

	colorize();

};
