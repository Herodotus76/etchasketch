$(document).ready(function() {
	
	function createGrid(num) {
		$square = $("<div class='square'></div>")
		
		for (var i = 0; i < num * num; i++) {
			$("#grid").append($square.clone());
		};
		
		$(".square").css({"height": (100/num) + "%",
						  "width": (100/num) + "%"});
						  
		$(".square").mouseenter(function() {
			if ($("select").val() == "black") {
				$(this).css({"opacity": "1",
							 "background-color": "black"});
			} else if ($("select").val() == "colors") {
				var red = Math.floor(Math.random() * 255) + 1;
				var green = Math.floor(Math.random() * 255) + 1;
				var blue = Math.floor(Math.random() * 255) + 1;
				$(this).css({"background-color": "rgb( " + red + ", " + green + ", " + blue + ")",
							 "opacity": "1"});
			} else if ($("select").val() == "darkening") {
				var opacity = $(this).css("opacity");
				if (opacity < 1) {
					opacity -= -0.1;
				}
				$(this).css("opacity", opacity);
			}
		});
	};
	
	createGrid(10);
	
	$("button").click(function() {
		$("#grid").empty();
		var num = prompt("Enter how many squares per side:");
		createGrid(num);
	});
});