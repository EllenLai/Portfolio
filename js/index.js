
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

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.bar .level');

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    } else {
        $elem.removeClass('start');
    }
}

function checkAnimation2() {
    var $elem = $('.skillsq');

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('slideUp');
    } else {
        $elem.removeClass('slideUp');
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
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


});
