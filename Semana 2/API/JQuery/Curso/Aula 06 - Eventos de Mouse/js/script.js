$(function(){

    var ex = $('.ex1');

    // CLICK
    $('.ev1').click(function(){
        $(this).css("background", "#CCC");
        ex.text("Clique");
    });

    // DOUBLE CLICK
    $('.ev2').dblclick(function(){
        $(this).css("background", "#CCC");
        ex.text("Dois cliques");

    });

    // FOCUS IN
    $('.ev3').focusin(function(){
        $(this).css("background", "#CCC");
        ex.text("Foco");

    // FOCUS OFF
    }).focusout(function(){
        $(this).css("background", "#000");
        ex.text("Sem foco");
    });

    // HOVER
    $('.ev4').hover(function(){
        $(this).css("background", "#CCC");
        ex.text("Hover");
    });

    // MOUSE DOWN
    $('.ev5').mousedown(function(){
        $(this).css("background", "#CCC");
        ex.text("Apertou o botão do mouse");
    
    // MOUSE UP
    }).mouseup(function(){
        $(this).css("background", "#000");
        ex.text("Soltou o botão do mouse");
    })

    // HOVER IN
    var a = 0;
    $('.ev6').mouseenter(function(){
        a += 1;
        ex.text("Entradas do mouse: " + a);

    // HOVER OUT
    }).mouseout(function(){
        ex.text("Saídas do mouse: ")
    });

    // MOUSE OVER
    var b = 0;
    $('.ev7').mouseover(function(){
        b += 1;
        ex.text("Mouse over: " + b);
    // MOUSE LEAVE
    }).mouseleave(function(){
        ex.text("Mouse leave")
    })

    $('.ev8').mousemove(function(move){
         var localx = move.pageX;
         var localy = move.pageY;

         ex.text("Movimento X: " + localx + " - Movimento Y: " + localy);
    });





})