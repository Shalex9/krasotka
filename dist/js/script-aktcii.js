$(function () {
    var screenWidth = document.body.clientWidth;

    $('button.collapsed').on('click', function() {
        $('div.collapse').toggleClass('in').css({'height':'250px', 'padding-top':'10px', 'border-top':'none'});
    });


    new WOW().init();

    $('.parallax').scrolly({bgParallax: true});

    $(".fancybox-foto").fancybox({
        "imageScale"    :   true,
        'overlayShow'   :   true,
        'centerOnScroll':   true,
        'overlayColor'  :   '#333',
        'margin'        :   '10',
        'cyclic'        :   'true'
    });

    // if(screenWidth <= "1200" && screenWidth >= "320") {
    //     $(window).resize(resizeAktciiBox);
    //     function resizeAktciiBox() {
    //         // var screenWidth = document.body.clientWidth;
    //         var boxWidth = screenWidth - (screenWidth * 0.24);
    //         var marginleft = boxWidth / 2;
    //         // console.log("screenWidth", screenWidth);
    //         // console.log("boxWidth", boxWidth);
    //         // console.log("marginleft", marginleft);
    //         $('.aktcii-box').css({'width': boxWidth, 'margin-left': (- marginleft) });
    //     }
    //     resizeAktciiBox();
    // }
});
