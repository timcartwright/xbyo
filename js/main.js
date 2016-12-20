  $('.hide').mouseover(function() {
        $('.hide').addClass('test');

           if($('.hide').hasClass('test')){

        $(this).prev('img.grayscale').addClass('oui');

    }

  });

  $('.hide').mouseleave(function() {
        $('.hide').removeClass('test');
        $('img.grayscale').removeClass('oui');

  });

//** HERE THE TOGGLE FUNCTION **/


$('#toggle-one').click(function() {
             // if($('.hide').hasClass('test')){

  $('.toggle-one').slideToggle('slow');
    $('.toggle-three').hide();
  $('.toggle-four').hide();
    $('.toggle-five').hide();
    $('.toggle-six').hide();
    $('.toggle-seven').hide();
    $('.toggle-eight').hide();
    $('.toggle-nine').hide();


$('#toggle-one').addClass('current');

           if($('.toggleaction').hasClass('current')){

         // $('.hide').addClass('displayon');
 $('img.grayscale.oui').addClass('color');
            
    }

 $('img.grayscale.three').removeClass('color');
 $('img.grayscale.four').removeClass('color');
 $('img.grayscale.five').removeClass('color');
 $('img.grayscale.six').removeClass('color');
 $('img.grayscale.seven').removeClass('color');
 $('img.grayscale.eight').removeClass('color');
 $('img.grayscale.nine').removeClass('color');

});


$('#toggle-three').click(function() {
             // if($('.hide').hasClass('test')){


 
  $('.toggle-three').slideToggle('slow');
    $('.toggle-one').hide();
  $('.toggle-four').hide();
    $('.toggle-five').hide();
    $('.toggle-six').hide();
        $('.toggle-seven').hide();
    $('.toggle-eight').hide();
    $('.toggle-nine').hide();




$('#toggle-three').addClass('current');

           if($('.toggleaction').hasClass('current')){

         // $('.hide').addClass('displayon');
 $('img.grayscale.oui').addClass('color');
            
    }

 $('img.grayscale.one').removeClass('color');
 $('img.grayscale.four').removeClass('color');
 $('img.grayscale.five').removeClass('color');
 $('img.grayscale.six').removeClass('color');
 $('img.grayscale.seven').removeClass('color');
 $('img.grayscale.eight').removeClass('color');
 $('img.grayscale.nine').removeClass('color');

});

$('#toggle-four').click(function() {
             // if($('.hide').hasClass('test')){

 
  $('.toggle-four').slideToggle('slow');
        $('.toggle-one').hide();
    $('.toggle-three').hide();
    $('.toggle-five').hide();
    $('.toggle-six').hide();
    $('.toggle-seven').hide();
    $('.toggle-eight').hide();
    $('.toggle-nine').hide();



$('#toggle-four').addClass('current');

           if($('.toggleaction').hasClass('current')){

         // $('.hide').addClass('displayon');
 $('img.grayscale.oui').addClass('color');
            
    }

 $('img.grayscale.three').removeClass('color');
 $('img.grayscale.one').removeClass('color');
 $('img.grayscale.five').removeClass('color');
 $('img.grayscale.six').removeClass('color');
 $('img.grayscale.seven').removeClass('color');
 $('img.grayscale.eight').removeClass('color');
 $('img.grayscale.nine').removeClass('color');


});

$('#toggle-five').click(function() {
             // if($('.hide').hasClass('test')){

 
  $('.toggle-five').slideToggle('slow');
        $('.toggle-one').hide();
    $('.toggle-three').hide();
    $('.toggle-four').hide();
    $('.toggle-six').hide();
    $('.toggle-seven').hide();
    $('.toggle-eight').hide();
    $('.toggle-nine').hide();



$('#toggle-five').addClass('current');

           if($('.toggleaction').hasClass('current')){

         // $('.hide').addClass('displayon');
 $('img.grayscale.oui').addClass('color');
            
    }

 $('img.grayscale.three').removeClass('color');
 $('img.grayscale.four').removeClass('color');
 $('img.grayscale.one').removeClass('color');
 $('img.grayscale.six').removeClass('color');
 $('img.grayscale.seven').removeClass('color');
 $('img.grayscale.eight').removeClass('color');
 $('img.grayscale.nine').removeClass('color');

});

$('#toggle-six').click(function() {

 
  $('.toggle-six').slideToggle('slow');
      $('.toggle-one').hide();
    $('.toggle-three').hide();
    $('.toggle-five').hide();
    $('.toggle-four').hide();
    $('.toggle-seven').hide();
    $('.toggle-eight').hide();
    $('.toggle-nine').hide();


$('#toggle-six').addClass('current');

           if($('.toggleaction').hasClass('current')){

         // $('.hide').addClass('displayon');
 $('img.grayscale.oui').addClass('color');
            
    }

 $('img.grayscale.three').removeClass('color');
 $('img.grayscale.four').removeClass('color');
 $('img.grayscale.five').removeClass('color');
 $('img.grayscale.one').removeClass('color');
 $('img.grayscale.seven').removeClass('color');
 $('img.grayscale.eight').removeClass('color');
 $('img.grayscale.nine').removeClass('color');


});

$('#toggle-seven').click(function() {
             // if($('.hide').hasClass('test')){

  $('.toggle-seven').slideToggle('slow');
      $('.toggle-one').hide();
    $('.toggle-three').hide();
    $('.toggle-five').hide();
    $('.toggle-four').hide();
    $('.toggle-six').hide();
    $('.toggle-eight').hide();
    $('.toggle-nine').hide();

$('#toggle-seven').addClass('current');

           if($('.toggleaction').hasClass('current')){

         // $('.hide').addClass('displayon');
 $('img.grayscale.oui').addClass('color');
            
    }

 $('img.grayscale.three').removeClass('color');
 $('img.grayscale.four').removeClass('color');
 $('img.grayscale.five').removeClass('color');
 $('img.grayscale.six').removeClass('color');
 $('img.grayscale.one').removeClass('color');
 $('img.grayscale.eight').removeClass('color');
 $('img.grayscale.nine').removeClass('color');


});

$('#toggle-eight').click(function() {

  $('.toggle-eight').slideToggle('slow');
    $('.toggle-one').hide();
    $('.toggle-three').hide();
    $('.toggle-five').hide();
    $('.toggle-four').hide();
    $('.toggle-six').hide();
    $('.toggle-seven').hide();
    $('.toggle-nine').hide();



$('#toggle-eight').addClass('current');

           if($('.toggleaction').hasClass('current')){

         // $('.hide').addClass('displayon');
 $('img.grayscale.oui').addClass('color');
            
    }

 $('img.grayscale.three').removeClass('color');
 $('img.grayscale.four').removeClass('color');
 $('img.grayscale.five').removeClass('color');
 $('img.grayscale.six').removeClass('color');
 $('img.grayscale.seven').removeClass('color');
 $('img.grayscale.one').removeClass('color');
 $('img.grayscale.nine').removeClass('color');


});

$('#toggle-nine').click(function() {



  $('.toggle-nine').slideToggle('slow');
    $('.toggle-one').hide();
    $('.toggle-three').hide();
    $('.toggle-five').hide();
    $('.toggle-four').hide();
    $('.toggle-six').hide();
    $('.toggle-seven').hide();
    $('.toggle-eight').hide();


$('#toggle-nine').addClass('current');

           if($('.toggleaction').hasClass('current')){

         // $('.hide').addClass('displayon');
 $('img.grayscale.oui').addClass('color');
            
    }

 $('img.grayscale.three').removeClass('color');
 $('img.grayscale.four').removeClass('color');
 $('img.grayscale.five').removeClass('color');
 $('img.grayscale.six').removeClass('color');
 $('img.grayscale.seven').removeClass('color');
 $('img.grayscale.eight').removeClass('color');
 $('img.grayscale.one').removeClass('color');


});




/** CLOSING TOGGLE **/

$('#toggle-close-one').click(function() {
  $('.toggle-one').slideToggle('slow');
  return false;
});

$('#toggle-close-three').click(function() {
  $('.toggle-three').slideToggle('slow');
  return false;
});

$('#toggle-close-four').click(function() {
  $('.toggle-four').slideToggle('slow');
  return false;
});


$('#toggle-close-five').click(function() {
  $('.toggle-five').slideToggle('slow');
  return false;
});


$('#toggle-close-six').click(function() {
  $('.toggle-six').slideToggle('slow');
  return false;
});


$('#toggle-close-seven').click(function() {
  $('.toggle-seven').slideToggle('slow');
  return false;
});


$('#toggle-close-eight').click(function() {
  $('.toggle-eight').slideToggle('slow');
  return false;
});


$('#toggle-close-nine').click(function() {
  $('.toggle-nine').slideToggle('slow');
  return false;
});

$('#toggle-close').click(function() {

$('.toggleaction').toggleClass('current');

           if($('.toggleaction').toggleClass('current')){

        $('.hide').toggleClass('displayon');
 $('img.grayscale').removeClass('color');
            
    }


});

//** SCROLL TO OPEN SECTION **//

$('#toggle-eight, #toggle-nine').click(function () {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 'slow');
    return false;
});

$('#toggle-one').click(function () {
    $('html, body').animate({
        scrollTop: $('#one').height()
    }, 'slow');
    return false;
});

$('#toggle-three').click(function () {
    $('html, body').animate({
        scrollTop: $('#three').height()
    }, 'slow');
    return false;
});

// $('#toggle-four').click(function () {
//     $('html, body').animate({
//         scrollBottom: $('#four').height()
//     }, 'slow');
//     return false;
// });

// $("#myDiv").attr({ scrollTop: $("#myDiv").attr("scrollHeight") });

$('#toggle-four').click(function () {
    $('html, body').animate({
        scrollTop: $('#toggle-four').offset().top}, 'slow');   
    return false;
});

$('#toggle-five').click(function () {
    $('html, body').animate({
        scrollTop: $('#toggle-five').offset().top}, 'slow');
    return false;
});




$('#toggle-six').click(function () {
    $('html, body').animate({
        scrollTop: $('#toggle-six').offset().top}, 'slow');
    return false;
});

//   $('#toggle-six').click(function(e){
//   e.preventDefault();
//   // $('.toggle-four').slideToggle();
//     $('html, body').animate({
//         scrollTop: 'height'
//     }, 'slow');
// });


// $('#toggle-five').click(function () {
//     $('html, body').animate({
//         scrollTop: $('#five').height()
//     }, 'slow');
//     return false;
// });

// $('#toggle-six').click(function () {
//     $('html, body').animate({
//         scrollTop: $('#six').height()
//     }, 'slow');
//     return false;
// });

$('#toggle-seven').click(function () {
    $('html, body').animate({
        scrollTop: $('#toggle-seven').offset().top}, 'slow');
  
    return false;
});

// $('#toggle-eight').click(function () {
//     $('html, body').animate({
//         scrollTop: $('#eight').height()
//     }, 'slow');
//     return false;
// });

// $("a[href='#eight']").click(function() {
//   $("html, body").animate({ scrollTop: $(document).height() }, "slow");
//   return false;
// });​

// $('a.toggle-eight').click(function() {
//     $('html,body').animate({
//         scrollTop: $('.toggle-eight').offset().top},
//         'slow');
// });

// $("a.toggle-eight").on("shown.bs.collapse", function () {
//     var myEl = $(this).find('.toggle-eight');

//     $('html, body').animate({
//         scrollTop: $(myEl).offset().top
//     }, 500);
// });


