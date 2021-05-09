(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        $('body').addClass('light');

        $('ul.menu li').on("mouseover", function () {
            $('body').addClass('dark').removeClass('light');
        });

        $('ul.menu li').on("mouseout", function () {
            $('body').addClass('light').removeClass('dark');
        });


        // Header Slide
        $(".home_slider").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: true,
            animateIn: 'pulse',
            animateOut: 'fadeOut',
            smartSpeed: 250
        });

        // testimonial Slide
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 250
        });
        
        
        // Megnific Popup Video BTN
        $(".playbtn").magnificPopup({
        type: 'video'
        });

    });

}(jQuery));
