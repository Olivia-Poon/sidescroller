$(window).on ('scroll', function(e){
	var px= $(window).scrollTop();

	if (px ==0 ||px <500){
		$('.hills').fadeOut()
	}
	else {
		$('.hills').fadeIn()
	}

console.log( "Pixels scrolled: " + $(this).scrollTop() )

}); 






