var contWidth = $(".container").width();
var contHeight = $(".container").height();
var gridSize = 16;

$(document).ready(function() {

	fillCont(gridSize);

	$("#clear").click(function() {
		clearCont();
		gridSize = prompt("Choose how many squares per side the new grid will be : (default 16)");
		fillCont(gridSize);
	});


	$("#randomCheck").click(function() {
		colorize();
	});

	$("#opacityCheck").click(function() {
		
		$("#primary").css("background-color", "#fff")
		$("#secondary").css("background-color", "#000")

		$("#primary").toggleDisabled();
		$("#secondary").toggleDisabled();
		$("#randomCheck").prop("checked", false)
		$("#randomCheck").toggleDisabled();

		clearCont();
		fillCont(gridSize);


		if ($("#opacityCheck").prop("checked")) {

			$("li").css("opacity", 0);
			gradient(0.1);
		}

	});

});


var clearCont = function() {
	$(".container").html("");
};

var fillCont = function(size) {

	if ( !size ) {
		size = 16;
	}

	var t0 = performance.now();

	var i = 1;
	var j = 1;

	var grid = "";

	for (i = 1; i <= size; i++) {

		grid = grid.concat("<ul>");

		for (j = 1; j <= size; j++) {
			grid = grid.concat("<li></li>");
		}

		grid = grid.concat("</ul>");
	}

	$(".container").append(grid);

	$("li").width(contWidth / size);
	$("li").height(contHeight / size);

	$("li").css("background-color", $("#primary").css("background-color"));

	colorize();

	var t1 = performance.now();
	console.log("fillCont s'est execute en " + Math.floor(t1 - t0) + " millisecondes.");

};


var colorize = function() {

	if ($("#randomCheck").prop("checked")) {
		$("li").hover(function() {
		$(this).css("background-color", '#'+Math.floor(Math.random()*16777215).toString(16)	);
		});
	}
	else {
		$("li").hover(function() {
		$(this).css("background-color", $("#secondary").css("background-color"));
		});
	}
};



var gradient = function(percentage) {

	colorize();


	$("li").hover(function() {

		$(this).css("opacity", (parseFloat($(this).css("opacity")) + percentage).toString());
	});

};


// toggleDisable funtction found here :
// https://php.quicoto.com/how-to-toggle-disabled-with-jquery/
// write by Ricard Torres

(function($) {
    $.fn.toggleDisabled = function(){
        return this.each(function(){
            this.disabled = !this.disabled;
        });
    };
})(jQuery);