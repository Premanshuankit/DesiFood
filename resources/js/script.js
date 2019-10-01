$(document).ready(function() {
	
	// For scticky navigation
	$(".js--section-features").waypoint(function(direction) {
		if (direction == "down"){
			$("nav").addClass("sticky");
		} else {
			$("nav").removeClass("sticky");
		}
	}, {
		offset: '60px;'
	});

	// scrolling to particular section when the button is clicked

	// scroll on buttons
	$(".js--scroll-to-plans").click(function() {
		$("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 1000 );
	});

	$(".js--scroll-to-start").click(function() {
		$("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000 );
	});
	
	// navigation scroll
	$(".js--scroll-to-food-delivery").click(function() {
		$("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000 );
	});

	$(".js--how-it-works").click(function() {
		$("html, body").animate({scrollTop: $(".js--section-steps").offset().top}, 1000 );
	});

	$(".js--our-cities").click(function() {
		$("html, body").animate({scrollTop: $(".js--section-cities").offset().top}, 1000 );
	});

	$(".js--sign-up").click(function() {
		$("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 1000 );
	});

	// Animations on scroll
	$('.js--wp-1').waypoint(function(direction) {
		$(".js--wp-1").addClass("animated fadeIn");
	}, {
		offset: "50%;"
	});

	$('.js--wp-2').waypoint(function(direction) {
		$(".js--wp-2").addClass("animated fadeInUp");
	}, {
		offset: "50%;"
	});

	$('.js--wp-3').waypoint(function(direction) {
		$(".js--wp-3").addClass("animated fadeIn");
	}, {
		offset: "50%;"
	});

	$('.js--wp-4').waypoint(function(direction) {
		$(".js--wp-4").addClass("animated shake");
	}, {
		offset: "50%;"
	});

	// Mobile navigation
	$(".js--nav-icon").click(function() {
		var nav = $(".js--main-nav");
		var icon = $(".js--nav-icon i");

		nav.slideToggle(200);
		if (icon.hasClass("ion-navicon-round")) {
			icon.addClass("ion-close-round");
			icon.removeClass("ion-navicon-round");
		} else {
			icon.addClass("ion-navicon-round");
			icon.removeClass("ion-close-round");
		}

		$('.js--main-nav').waypoint(function(direction) {
		$(".js--main-nav").addClass("animated pulse");
		}, {
			offset: "50%;"
		});
	});

});














