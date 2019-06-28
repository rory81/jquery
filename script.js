$(document).ready(function() {


	// $("p").click(function() {
	// 	$("p").addClass('parRed');
	// });

	// $("h2").hover(function() {
	// 	$("h2").addClass('h2Blue');
	// });

	// $("h2").hover(function() {
	// 	$("h2").addClass('h2Blue');
	// });

	// $("#hr_html").hover(function() {
	// 	$("#hr_mysql").removeClass('h2_font_size');
	// 	$("#hr_python").removeClass('h2_font_size');
	// 	$("#hr_jquery").removeClass('h2_font_size');
	// 	$("#hr_django").removeClass('h2_font_size');
	// 	$("#hr_css").removeClass('h2_font_size');
	// 	$("#hr_html").addClass('h2_font_size');

	// });

	// $(".bottom_button").mouseenter(function() {
	// 	$("body").addClass('bodyBlack')
	// })

	// $(".bottom_button").mouseleave(function() {
	// 	$("body").addClass('bodyGrey')
	// })

	// $("#button_hide").click(function() {
	// 	$("#par_hide").slideToggle("slow");
	// })

	// $("#button_hide").mouseenter(function() {
	// 	$("#button_hide").fadeTo("slow", 0.5 );
	// })
	// $("#button_hide").mouseleave(function() {
	// 	$("#button_hide").fadeTo("slow", 1 );
	// })

	// $('button').mouseenter(function(){
	// 	$('button').removeClass('makeRed').addClass('makeBorder')
	// });
	// $('button').mouseleave(function(){
	// 	$('button').removeClass('makeBorder').addClass('makeRed')
	// });

	$('button').click(function() {
		$('p').slideToggle()
	});

	$('button').click(function() {
		$('p').hide().show();
	});


});
