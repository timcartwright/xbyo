;(function($) {
    var $lgLook, $lgMake;

    // Initialise galleries
    $(document).ready(function() {
        $lgMake = $('#lightgallerymake').lightGallery(); 
        $lgLook = $('#lightgallerylook').lightGallery();
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
            scrollTop: $(target).offset().top - 60
        }, 'slow');
    });

    // Close content
    $('.overlay').click(function() {
        $('body').removeClass('content-open');
        $('.open').slideToggle('slow', function() {
            $('img.grayscale').removeClass('color');
            $('.current').removeClass('current');
            $('.open').removeClass('open');
            $('#close').remove();
        });
    });

    // Add close button to galleries
    $('[id^=lightgallery]').click(function() {
        $('.lg-thumb').prepend('<img class="close-button close-button--gallery" src="img/close.png" />');
    });

    // Close galleries
    $(document).click(function(e) {
        if (e.target == $('.lg-thumb-outer')[0]) {
            $lgLook.data('lightGallery').destroy();
            $lgMake.data('lightGallery').destroy();
        }
    });

})(window.jQuery);
