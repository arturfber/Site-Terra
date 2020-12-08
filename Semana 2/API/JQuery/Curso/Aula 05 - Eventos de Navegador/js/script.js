$(function(){

    
    // $('img').on('error', function () {
    //     $(this).attr('src', 'coruja.jpg');
    // });



    //Função de resize
    // $('img').width($(window).width()).height($(window).height());
    // $(window).resize(function(){
    //     $('img').width($(window).width()).height($(window).height());
    // })

    // Função Scroll
    // $(window).scroll(function(){
    //     $('img').fadeOut('1000');
    // })

    //Descobrindo quantidade de scroll
    $('body').css("height","5000")
    
    // $(window).scroll(function(){
    //     var topo = $(window).scrollTop()
    //     alert(topo)
    // })

    $(window).scroll(function(){
        var topo = $(window).scrollTop()
        if(topo > 400){
            $('img').fadeOut('1000');
        }
        else{
            $('img').fadeIn('1000');
        }
    })
})

