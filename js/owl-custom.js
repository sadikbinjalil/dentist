$( document ).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false

        },
        1000:{
            items:4,
            nav:false,
            dots:true,
            loop:true,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true

        }
    }
})
});




$( document ).ready(function(){
$('.testimonial-carousel').owlCarousel({
    loop:true,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true

        },
        1000:{
            items:1,
            nav:true,
            dots:false,
            loop:true,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true
        }
    }
})
});