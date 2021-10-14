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

/* Module toggle button */

$('.module-toggle').on('click', function() {
  const $btn = $(this);

  $(this).prev().slideToggle(function() {
    //this tutaj wskazuje na element zwijany

    //sprawdzam czy tekst po zwinięciu/rozwinięciu jest widoczny
    if ($(this).is(':visible')) {
      $btn.text('Ukryj szczegóły i opis');
    } else {
      $btn.text('Pokaż szczegóły i opis');
    }
  });
});

/* Toggle button */

$(function() {

  /*$('.toggle').on('click', function() {
    const $button = $(this);
    const $description = $('.description');

    $(this).prev().slideToggle(function() {
      //this tutaj wskazuje na element zwijany

      //sprawdzam czy tekst po zwinięciu/rozwinięciu jest widoczny
      if ($(this).is(':visible')& $('.description').is(':visible')) {
        $button.text('Zwiń');
        $description.addClass('show');
      } else {
        $button.text('Rozwiń cały opis');
        $description.removeClass('show');
      }
    });
  });*/

  $('.toggle').on('click', function() {
    const $button = $(this);

    //$('span').toggleClass(function() {
    $('span').toggleClass('description');

    if ($('span').is(':visible')) {
      $button.text('Zwiń opis');
    } else {
      $button.text('Rozwiń cały opis');
    }
    //});
  });
});
