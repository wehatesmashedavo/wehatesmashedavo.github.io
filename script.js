$(document).ready(function(){
	var button = $("click_me");
	button.on('click', function () {
		button.html("Clicked!");
	})
})




//Navbar script - doesn't work

$(document).ready(function(){
  var square=$(".box")
  square.on('hover', function(){
	square.css("border-color", "white");

	})
})

// End Navbar script


$(document).ready(function() {
	
    $('.SlideContainer').cycle({
		fx: 'fade',
	pause: 1,
	prev: '#prev',
	next: '#next'

	});
});
