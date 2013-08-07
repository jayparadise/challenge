$(document).ready(function() {
	function randomcolor () {
		return 'rgb(' +
     		Math.round(Math.random()*255)+', '+
     		Math.round(Math.random()*255)+', '+
     		Math.round(Math.random()*255)+')'	
};
	
	$('.square').on("mouseenter", function () {
		$(this).css('background-color', randomcolor());
		$(this).css('box-shadow', "0 0 8px white");
	});

	$('.square').on("mouseleave", function () {
		$(this).css('box-shadow', "none");
	});
});