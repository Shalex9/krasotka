/***************** Scroll Spy ******************/

// $('body').scrollspy({
//     target: '.navbar-fixed-top',
//     offset: 83
// });

$(function () {

    new WOW().init();

    $(".hvr-grow").fancybox({
        'overlayShow': true,
        'centerOnScroll': true,
        'overlayColor': '#333',
        'margin': '10',
        'cyclic': 'true'
    });

    $('.grid').imagesLoaded(function () {
        $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-item'
            }
        });
    });

    // Scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('a.page-scroll').parent().removeClass('active');
        $(this).parent().addClass('active');

        var link = $anchor.attr('href');

        var f_div = $(link);

        if (f_div.length) {
            // if{
            //
            // } else {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1500, 'easeInOutExpo');
            // }
        }

        event.preventDefault();
    });

    // main-page
    $(window).scroll();
    $(window).scrollTop();

    $(window).scroll(function () {
        var top_scroll = $(this).scrollTop();
        if (top_scroll > 0) {
            $('.main-page').css('display', 'block');
            $('.navbar').css('height', '50px');
            $('nav').css('padding-top', '15px');
            $('.logo__img').css({ 'width': '60px', 'margin-top': '-30px' });
        } else {
            $('.main-page').css('display', 'none');
            $('.navbar').css('height', '80px');
            $('nav').css('padding-top', '30px');
            $('.logo__img').css({ 'width': '100px', 'margin-top': '-45px' });
        }
    });
});