
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

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});



});
