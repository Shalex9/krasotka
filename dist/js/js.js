/***************** Scroll Spy ******************/

// $('body').scrollspy({
//     target: '.navbar-fixed-top',
//     offset: 83
// });

$(function () {
        $('a.page-scroll').bind('click', function (event) {
                var $anchor = $(this);
                $('a.page-scroll').parent().removeClass('active');
                $(this).parent().addClass('active');

                var link = $anchor.attr('href');

                var f_div = $(link);

                if (f_div.length) {
                        $('html, body').stop().animate({
                                scrollTop: $($anchor.attr('href')).offset().top - 82
                        }, 1500, 'easeInOutExpo');
                }

                event.preventDefault();
        });
});