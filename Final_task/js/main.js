const lock = document.querySelector('body');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

$(document).ready(function() {
  $('#burger').click(function() {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    lock.classList.toggle("lock");
  });

  $('.js-btn').on('click', false);

  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
});

document.querySelectorAll('.js-btn').forEach(e => {
  e.onclick = function(event) {
    let front = event.target.parentNode.parentNode.querySelector('.front');
    let back = event.target.parentNode.parentNode.querySelector('.back');
    showBtn(front, back);
  }
});


let showBtn = function(front, back) {
  front.classList.toggle("hidden");
  back.classList.toggle("hidden");
};

function slowScroll(id) {
  let offset = $('header').css('height');
  offset = offset.substring(0, offset.length - 2);
  $('html, body').animate({
    scrollTop: $(id).offset().top - (+offset + 5)
  }, 700);
  closeMenu();
};

function closeMenu() {
  burger.classList.remove('active');
  menu.classList.remove('active');
  lock.classList.remove('lock');
};