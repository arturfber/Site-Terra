// ====================  O W L  C A R O U S E L  ====================
$(document).ready(function(){

    var owl = $(".owl-carousel");

    owl.owlCarousel({
        items: 5,
        loop: false,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 1000,
        dots: true,
        autoplayHoverPause: true,
        startPosition: 0,
        slideBy: 1,
        slideTransition: 'linear',
    });
    
    $("#btn_prev").on('click', function(){
        owl.trigger('prev.owl.carousel');
    })

    $("#btn_next").on('click', function(){
        owl.trigger('next.owl.carousel');
    })
    
});