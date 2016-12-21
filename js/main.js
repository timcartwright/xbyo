;(function($) {
    // Colour image on hover
    $('.hide').hover(function() {
        $(this).prev('img.grayscale').toggleClass('remove-grayscale');
    });

    // Toggle content sections
    $('[id^=toggle-]').click(function() {
        var target = '.' + this.id;

        $('[class^=toggle-]:not(' + target + ')').hide();
        $('img.grayscale').removeClass('color');

        $(target).slideToggle('slow');
        $(this).toggleClass('current');

        if ($('.toggleaction').hasClass('current')) {
            $('img.remove-grayscale').addClass('color');
        };

        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 'slow');
    });
})(window.jQuery);
