/***************** Scroll Spy ******************/

// $('body').scrollspy({
//     target: '.navbar-fixed-top',
//     offset: 83
// });

$(function () {

    $(".hvr-grow").fancybox({
        'overlayShow'   :   true,
        'centerOnScroll':   true,
        'overlayColor'  :   '#333',
        'margin'        :   '10',
        'cyclic'        :   'true'
    });


    var datafoto = {
        foto: [
            "../img/foto/001.jpg", "../img/foto/002.jpg", "../img/foto/003.jpg", "../img/foto/004.jpg", "../img/foto/005.jpg", "../img/foto/006.jpg", "../img/foto/007.jpg"
        ]
    }

    $('.grid').isotope({
        itemSelector: '.grid-item',
        masonry: {
          columnWidth: '.grid-item'
        }
    });

    // Scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('a.page-scroll').parent().removeClass('active');
        $(this).parent().addClass('active');

        var link = $anchor.attr('href');

        var f_div = $(link);

        if (f_div.length){
            // if{
            //
            // } else {
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 80
                }, 1500, 'easeInOutExpo');
            // }

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
       } else {
           $('.main-page').css('display', 'none');
       }
       if(top_scroll > 400){
           $('.foto').addClass('animated flip  slideInRight');
       }
    });

    //animate about foto
    $('.foto').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);

});
