

$(function () {
    // 
    // $('.owl-carousel').owlCarousel({
    //     autoPlay: 5000,
    //     navigation : false, // показывать кнопки next и prev
    //     slideSpeed : 300,
    //     paginationSpeed : 400,
    //     items : 1,
    //     itemsDesktop : false,
    //     itemsDesktopSmall : false,
    //     itemsTablet: false,
    //     itemsMobile : false
    // });
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


    $('.grid').imagesLoaded( function() {
        $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
              columnWidth: '.grid-item'
            }
        })
    });

    // Scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('a.page-scroll').parent().removeClass('active');
        $(this).parent().addClass('active');
        var link = $anchor.attr('href');
        var f_div = $(link);

        if (f_div.length){
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 50
                }, 1500, 'easeInOutExpo');
        }
        event.preventDefault();
    });

    // main-page
    $(window).scroll();
    $(window).scrollTop();

    $(window).scroll(function() {
   var top_scroll = $(this).scrollTop();
       if(top_scroll > 0) {
           $('.main-page').css('display', 'block');
           $('.navbar').css('height', '50px');
           $('nav').css('padding-top', '15px');
           $('.logo__img').css({'width': '60px', 'margin-top': '-30px'});
       } else {
           $('.main-page').css('display', 'none');
           $('.navbar').css('height', '80px');
           $('nav').css('padding-top', '30px');
           $('.logo__img').css({'width': '100px', 'margin-top': '-45px'});
       }
    });

});
