/* Scroll to top */

$(function() {

  var icon = $('.scroll-to-top-icon i');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 90) {
      icon.addClass('show');
    } else {
      icon.removeClass('show');
    }
  });

  icon.click(function() {
    $('html, body').animate({scrollTop: 0}, 400, 'linear');
  });
});
