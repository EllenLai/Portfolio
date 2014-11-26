
$(document).ready(function() {
var stickyNavTop = $('.nav').offset().top;

var stickyNav = function(){
var scrollTop = $(window).scrollTop();

if (scrollTop > stickyNavTop) {
    $('.nav').addClass('sticky');
    $('.nav_item').show();
} else {
    $('.nav').removeClass('sticky');
    $('.nav_item').hide();
  }
};


$(window).scroll(function() {
    stickyNav();
  });



});