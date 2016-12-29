(function(){
  "use strict";


jQuery(window).bind('load', function () {

if( !device.tablet() && !device.mobile() ) {

            /* if non-mobile device is detected*/
              // Parallax Init
              jQuery('.parallax').each(function() {
                    jQuery(this).parallax('60%', 0.5, true);
                });

        }
		//  else {
		//
        //     /* if mobile device is detected*/
        //     jQuery('.devider-section').addClass('parallax-off');
        // }

});
})(jQuery);
