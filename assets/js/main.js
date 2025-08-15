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
  $(".mobile-menu .menu-link.menu-item-has-children > a").on(
    "click",
    function (e) {
      e.preventDefault();
      var $submenu = $(this).next(".sub-menu");

      // Toggle the current submenu
      $submenu.slideToggle();

      // Close other open submenus
      $(".menu-link.menu-item-has-children")
        .not($(this).parent())
        .find(".sub-menu")
        .slideUp();

      // Toggle active class for the current menu item
      $(this).parent().toggleClass("active").siblings().removeClass("active");
    }
  );
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

// Career page popup modals
/* 
$(document).ready(function () {
  // Store scroll position before opening modal
  let scrollPosition = 0;

  // Open modal when any details button is clicked
  $("#vacancies .vacancy .details-btn").click(function (e) {
    e.preventDefault(); // Prevent default button behavior
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    const modalId = $(this).closest("#vacancies .vacancy").data("modal");
    $("#" + modalId).fadeIn();
    // Apply no-scroll by adding padding instead of position:fixed
    $("body").css({
      overflow: "hidden",
      position: "relative",
      top: `-${scrollPosition}px`,
    });
  });

  // Close modal when X is clicked
  $(".close-modal").click(function (e) {
    e.preventDefault(); // Prevent default link behavior
    $(this).closest(".modal-overlay").fadeOut();
    // Restore scrolling and position
    $("body").css({
      overflow: "",
      position: "",
      top: "",
    });

    window.scrollTo(0, scrollPosition);
  });

  // Close modal when clicking outside the content
  $(window).click(function (event) {
    if ($(event.target).hasClass("modal-overlay")) {
      event.preventDefault();
      $(".modal-overlay").fadeOut();
      $("body").css({
        overflow: "",
        position: "",
        top: "",
      });

      window.scrollTo(0, scrollPosition);
    }
  });
});*/

$(document).ready(function () {
  // Open modal when any details button is clicked
  $("#vacancies .vacancy .details-btn").click(function (e) {
    e.preventDefault();
    const modalId = $(this).closest("#vacancies .vacancy").data("modal");
    $("#" + modalId).fadeIn();
  });

  // Close modal when X is clicked
  $(".close-modal").click(function (e) {
    e.preventDefault();
    $(this).closest(".modal-overlay").fadeOut();
  });

  // Close modal when clicking outside the content
  $(window).click(function (event) {
    if ($(event.target).hasClass("modal-overlay")) {
      $(".modal-overlay").fadeOut();
    }
  });
});

// Highlight active menu link based on current page
$(document).ready(function () {
  // Get current page path without extension
  var currentPath = window.location.pathname
    .replace(".html", "")
    .split("/")
    .pop();

  // Loop through each menu link
  $(".menu-link a").each(function () {
    var linkPath = $(this).attr("href").replace(".html", "").split("/").pop();

    // Check if link path matches current page path
    if (
      linkPath === currentPath ||
      (currentPath === "" && linkPath === "index")
    ) {
      $(this).addClass("active");

      // If it's in a submenu, also highlight the parent
      if ($(this).closest(".sub-menu").length) {
        $(this)
          .closest(".menu-item-has-children")
          .find("> a")
          .addClass("active");
      }
    }
  });
});

//Cookie Consent
$(document).ready(function () {
  // Only show if consent wasn't given
  if (!localStorage.getItem("cookieConsent")) {
    setTimeout(function () {
      $("#cookie-consent-popup").addClass("visible").css("display", "block");
    }, 1000); // 1 second delay
  }

  // Handle consent button click
  $("#cookie-consent-button").on("click", function () {
    $("#cookie-consent-popup")
      .removeClass("visible")
      .delay(500) // matches transition duration
      .queue(function () {
        $(this).css("display", "none").dequeue();
      });

    // Store consent
    localStorage.setItem("cookieConsent", "true");
  });
});
