// ====================  O W L  C A R O U S E L  ====================
$(document).ready(function(){

    var owl = $(".owl-carousel");

    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
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