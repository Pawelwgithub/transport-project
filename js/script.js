/* Media menu */

const icon = document.getElementById('icon');
const icon1 = document.getElementById('a');
const icon2 = document.getElementById('b');
const icon3 = document.getElementById('c');
const menu = document.getElementById('menu');
const color = document.getElementById('color');

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  menu.classList.toggle('show');
  color.classList.toggle('slide');
});

/* Scroll to top */

$(function() {

  const icon = $('.scroll-to-top-icon i');

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
