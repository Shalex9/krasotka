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
});
