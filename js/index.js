
$(document).ready(function() {
  $('.nav_item').hide();
var stickyNavTop = $('.nav').offset().top -500;

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



});
