/*jQuery(document).ready(function($) {
	//create the slider
	$('.mb-testimonials-wrapper').flexslider({
		selector: ".mb-testimonials > li",
		animation: "slide",
		controlNav: true,
		slideshow: false,
		smoothHeight: true,
		start: function() {
			$('.mb-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});
});
