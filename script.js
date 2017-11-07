
$(document).ready(function(){
	var button = $("click_me");
	button.on('click', function () {
		button.html("Clicked!");
	})
})






// Navbar script - doesn't work

$(document).ready(function(){
  var square=$(".box")
  $(".box").on('hover', function(){
	$(".box").css("color", "red");

	})
})

// End Navbar script


//Slide show script

$(document).ready(function() {
	
    $('.SlideContainer').cycle({
		fx: 'fade',
	pause: 1,
	speed:2000,
	prev: '#prev',
	next: '#next'

	});
});

//End slideshow script