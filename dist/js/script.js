$(function () {

    $('.owl-carousel').owlCarousel({
        autoPlay: 5000,
        navigation: false, // показывать кнопки next и prev
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });

    new WOW().init();

    $('.parallax').scrolly({ bgParallax: true });

    $(".fancybox-foto").fancybox({
        "imageScale": true,
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
    $('.nav a').on('click', function (event) {
        event.preventDefault();
        var scrollAnchor = $(this).attr('data-scroll');
        //  scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;
        $('body,html').animate({
            scrollTop: $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 50
        }, 1500, 'easeInOutExpo');
        return false;
    });

    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        $('body section').each(function (i) {
            if ($(this).position().top <= windscroll + 50) {
                $('.nav a.active').removeClass('active');
                $('.nav a').eq(i).addClass('active');
            }
        });
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
    }).scroll();
});