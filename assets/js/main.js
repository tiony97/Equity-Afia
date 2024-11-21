/* Mobile Menu */
$(document).ready(function () {
	$(".menu-toggle").click(function () {
		$(".menu-icon").toggleClass("open");
		$(".mobile-menu").toggleClass("open");
		$(".body-overlay").toggleClass("open");
		$("body").toggleClass("no-scroll"); // Toggle body scroll
	});

	// Close menu when overlay is clicked
	$(".body-overlay").click(function () {
		$(".menu-icon").removeClass("open");
		$(".mobile-menu").removeClass("open");
		$(this).removeClass("open");
		$("body").removeClass("no-scroll"); // Re-enable body scroll
	});

	//Mobile Menu Accordion
	$(".mobile-menu .menu-link.menu-item-has-children > a").on("click", function (e) {
		e.preventDefault();
		var $submenu = $(this).next(".sub-menu");

		// Toggle the current submenu
		$submenu.slideToggle();

		// Close other open submenus
		$(".menu-link.menu-item-has-children").not($(this).parent()).find(".sub-menu").slideUp();

		// Toggle active class for the current menu item
		$(this).parent().toggleClass("active").siblings().removeClass("active");
	});
});

/* Fix header to top */
$(document).ready(function () {
	const header = $("header");
	const headerHeight = header.outerHeight();

	$(window).scroll(function () {
		if ($(window).scrollTop() > headerHeight) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	});
});

/* Home Page Slider */
$(document).ready(function () {
	const swiper = new Swiper(".home-swiper", {
		loop: true,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		effect: "slide",
	});
});

/* Location Slider */
$(document).ready(function () {
	const swiper = new Swiper(".location-swiper", {
		loop: true,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		effect: "slide",
	});
});

/* Services Slider */
$(document).ready(function () {
	const swiper = new Swiper(".services-slider", {
		loop: false,
		spaceBetween: 12,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.2,
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 2.1,
			},
			// when window width is >= 480px
			1024: {
				slidesPerView: 4.5,
			},
		},
		effect: "slide",
	});
});

/* Payments Slider */
$(document).ready(function () {
	const swiper = new Swiper(".pay-swiper", {
		loop: false,
		spaceBetween: 12,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.5,
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 2.1,
			},
			// when window width is >= 480px
			1024: {
				slidesPerView: 4.5,
			},
		},
		effect: "slide",
	});
});
