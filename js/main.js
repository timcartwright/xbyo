;(function($) {
    var $lgLook, $lgMake;

    // Video player
    $('.video__player').click(function() {
        !this.paused ? this.pause() : this.play();
    });

    $('.video__player').hover(function() {
        this.hasAttribute('controls') ? this.removeAttribute('controls') : this.setAttribute('controls', 'controls');
    });

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
            $('body').toggleClass('content-open');
            $('img.grayscale').removeClass('color');
            $(this).toggleClass('current');
            $(target).toggleClass('open');
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
            $('.current').removeClass('current');
            $('img.grayscale').removeClass('color');
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
