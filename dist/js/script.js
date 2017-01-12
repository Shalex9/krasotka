$(function () {

    $('button.collapsed').on('click', function() {
        $('div.collapse').toggleClass('in').css({'height':'250px', 'padding-top':'10px', 'border-top':'none'});
    });


    if(document.body.clientWidth >= "480") {
        $('.owl-carousel').owlCarousel({
            autoPlay: 5000,
            navigation : false,
            slideSpeed : 300,
            paginationSpeed : 400,
            items : 1,
            itemsDesktop : false,
            itemsDesktopSmall : false,
            itemsTablet: false,
            itemsMobile : false
        });
    }

    $('.owl-carousel-comments-box').owlCarousel({
        autoPlay: 10000,
        navigation : false, // показывать кнопки next и prev
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
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

    $('.grid').imagesLoaded( function() {
        $('.grid').isotope({
            layoutMode: 'packery',
            itemSelector: '.grid-item',
            masonry: {
              columnWidth: '.grid-item'
            }
        })
    });

    // Scroll
   $('.nav a').on('click', function(event) {
    event.preventDefault();
     var scrollAnchor = $(this).attr('data-scroll');
     $('body,html').animate({
         scrollTop: $('section[data-anchor="' + scrollAnchor + '"]').offset().top-50
     }, 1000, 'easeInOutExpo');
     return false;
     });

     $(window).scroll(function() {
     var windscroll = $(window).scrollTop();
       $('body section').each(function(i){
         if($(this).position().top <= windscroll + 50) {
           $('.nav a.active').removeClass('active');
           $('.nav a').eq(i).addClass('active');
         }
       });
       var top_scroll = $(this).scrollTop();
            if (document.body.clientWidth >= "992") {
                if(top_scroll > 0) {
                    $('.navbar').css('height', '50px');
                    $('nav').css('padding-top', '15px');
                    $('.logo__img').css({'width': '60px', 'margin-top': '-30px'});
                } else {
                    $('.navbar').css('height', '80px');
                    $('nav').css('padding-top', '30px');
                    $('.logo__img').css({'width': '100px', 'margin-top': '-45px'});
                }
            }
     }).scroll();

    if(document.body.clientWidth <= "1200" && document.body.clientWidth >= "320") {
        $(window).resize(resizeBox);
        function resizeBox() {
            var screenWidth = document.body.clientWidth;
            var containerWidth = $(".container").width();
            var marginleft = (containerWidth / 2);
            // console.log("containerWidth", containerWidth);
            // console.log("marginleft", marginleft);
            $('.resize-box').css({'left': '50%' , 'margin-left': - marginleft});
        }
        resizeBox();

        $(window).resize(resizeServiceBox);
        function resizeServiceBox() {
            var screenWidth = document.body.clientWidth;
            var boxWidth = screenWidth - (screenWidth * 0.24);
            var marginleft = boxWidth / 2;
            // console.log("screenWidth", screenWidth);
            // console.log("boxWidth", boxWidth);
            // console.log("marginleft", marginleft);
            $('.service-box').css({'width': boxWidth, 'margin-left': (- marginleft) });
        }
        resizeServiceBox();
    }



});