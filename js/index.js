
$(document).ready(function() {
  $('.nav_item').hide();
var stickyNavTop = $('.nav').offset().top -550;

var stickyNav = function(){
var scrollTop = $(window).scrollTop();


if (scrollTop > stickyNavTop) {
    $('.nav_item').show();
    $('.nav').addClass('sticky');
} else {
    $('.nav').removeClass('sticky');
    $('.nav_item').hide();
  }
};


$(window).scroll(function() {
    stickyNav();
  });


function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

var animationRan = false;

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.bar .level');

    if (isElementInViewport($elem) && !animationRan) {
        // Start the animation
        $elem.addClass('start');
   }
}

function checkAnimation2() {
    var $elem = $('.skillsq');

    if (isElementInViewport($elem) && !animationRan) {
        // Start the animation
        $elem.addClass('slideUp');

    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
    checkAnimation2();
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 80
        }, 1000);
        return false;
      }
    }
  });
});

// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 200) {
        $('.main_h').addClass('sticky2');
    } else {
        $('.main_h').removeClass('sticky2');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});




});
