$(document).ready(function () {

	var paint = "white";

	$(".color_box").on("click", function () {
		paint = $(this).css('background-color');
	});

	$('.box').on('click', function () {
		$(this).css("background-color", paint );
	});
});
