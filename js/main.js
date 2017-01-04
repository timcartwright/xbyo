;(function($) {

    // Initialise galleries
    var $lgLook, $lgMake;

    $(document).ready(function() {
        $lgMake = $('#lightgallerymake').lightGallery(); 
        $lgLook = $('#lightgallerylook').lightGallery();
    });

    // Remove grayscale on hover
    $('.hide').hover(function() {
        $(this).prev('img.grayscale').toggleClass('remove-grayscale');
    });

    // Grayscale fix for IE11
    grayscaleFix();

    // Video player
    $('.video__player').click(function() {
        !this.paused ? this.pause() : this.play();
    });

    $('.video__player').hover(function() {
        this.hasAttribute('controls') ? this.removeAttribute('controls') : this.setAttribute('controls', 'controls');
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
    // $('.overlay').click(closeContent);

    // Add close button to galleries
    $('[id^=lightgallery]').click(function() {
        $('.lg-thumb').prepend('<img class="close-button close-button--gallery" src="img/close.png" />');
    });

    // Close positioned elements
    $(document).click(function(e) {
        switch(e.target) {
            case $('.close-button')[0]:
                closeContent();

            case $('.lg-thumb-outer')[0]:
                $lgLook.data('lightGallery').destroy();
                $lgMake.data('lightGallery').destroy();
                break;
        }
    });

})(window.jQuery);

function closeContent() {
    $('body').removeClass('content-open');
    $('.open').slideToggle('slow', function() {
        $('.current').removeClass('current');
        $('img.grayscale').removeClass('color');
        $('.open').removeClass('open');
        $('#close').remove();
    });
}

function grayscaleFix() {
    // IE 10 only CSS properties
    var ie10Styles = [
    'msTouchAction',
    'msWrapFlow'];

    var ie11Styles = [
    'msTextCombineHorizontal'];

    /*
    * Test all IE only CSS properties
    */

    var d = document;
    var b = d.body;
    var s = b.style;
    var brwoser = null;
    var property;

    // Tests IE10 properties
    for (var i = 0; i < ie10Styles.length; i++) {
        property = ie10Styles[i];
        if (s[property] != undefined) {
            brwoser = "ie10";
        }
    }

    // Tests IE11 properties
    for (var i = 0; i < ie11Styles.length; i++) {
        property = ie11Styles[i];
        if (s[property] != undefined) {
            brwoser = "ie11";
        }
    }

    //Grayscale images only on browsers IE10+ since they removed support for CSS grayscale filter
	 if(brwoser == "ie10" || brwoser == "ie11"){

		//If the browser supports Filters, then we assume that it is Microsoft Edge
		if (Modernizr.cssfilters){
			$('body').addClass('edge'); // Adds Microsoft Edge class to the body
		} else {
			$('body').addClass('ie11'); // Fixes marbin issue on IE10 and IE11 after canvas function on images
			$('img.grayscale').each(function(){
				var el = $(this);
				el.css({}).clone().addClass('img_grayscale ieImage').css({"position":"absolute","z-index":"4","opacity":"0"}).insertBefore(el).queue(function(){
					var el = $(this);
					// el.parent().css({"width":this.width,"height":this.height});
					el.dequeue();
				});
				this.src = grayscaleIe(this.src);
			});

			// Quick animation on IE10+ 
			$('img.grayscale').hover(
				function () {
					$(this).parent().find('img:first').stop().animate({opacity:1}, 200);
				}, 
				function () {
					$('.img_grayscale').stop().animate({opacity:0}, 200);
				}
			);

			// Custom grayscale function for IE10 and IE11
			function grayscaleIe(src){
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
				var imgObj = new Image();
				imgObj.src = src;
				canvas.width = imgObj.width;
				canvas.height = imgObj.height; 
				ctx.drawImage(imgObj, 0, 0); 
				var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
				for(var y = 0; y < imgPixels.height; y++){
					for(var x = 0; x < imgPixels.width; x++){
						var i = (y * 4) * imgPixels.width + x * 4;
						var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
						imgPixels.data[i] = avg; 
						imgPixels.data[i + 1] = avg; 
						imgPixels.data[i + 2] = avg;
					}
				}
				ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
				return canvas.toDataURL();
			};
		};
	 };
}
