;(function($) {
    // Initialise galleries
    $(document).ready(function() {
        $("#lightgallery").lightGallery(); 
        $("#lightgallerytwo").lightGallery(); 
        $("#lightgallerythree").lightGallery(); 
        $("#lightgallerylook").lightGallery({
            // animateThumb: false,
            // enableThumbDrag: false,
            // enableThumbSwipe: false
        }); 
    });
    // Colour image on hover
    $('.hide').hover(function() {
        $(this).prev('img.grayscale').toggleClass('remove-grayscale');
    });

    // Toggle content sections
    $('[id^=toggle-]').click(function() {
        var target = '.' + this.id;

        $('[class^=toggle-]:not(' + target + ')').hide();

        $(target).slideToggle('slow', function() {
            $('img.grayscale').removeClass('color');
            $(this).toggleClass('current');
            $(target).toggleClass('open');
            $('body').toggleClass('content-open');
            $(target).prepend('<a id="close"><img class="close-button" src="img/close.png" /></a>');
        });

        if ($('.toggleaction').hasClass('current')) {
            $('img.remove-grayscale').addClass('color');
        };

        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 'slow');
    });

    // Close content
    $('.overlay').on('click', function() {
        $('body').removeClass('content-open');
        $('.open').slideToggle('slow', function() {
            $('img.grayscale').removeClass('color');
            $('.current').removeClass('current');
            $('.open').removeClass('open');
            $('#close').remove();
        });
    });
})(window.jQuery);
