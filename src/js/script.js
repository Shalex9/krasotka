/***************** Scroll Spy ******************/

// $('body').scrollspy({
//     target: '.navbar-fixed-top',
//     offset: 83
// });

$(function () {

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
