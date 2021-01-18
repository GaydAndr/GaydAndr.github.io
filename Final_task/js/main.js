const lock = document.querySelector('body');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const menuBtn = document.querySelectorAll('.menuBtn');
let menuOpen = false;

burger.onclick = function() {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  lock.classList.toggle("lock");
  return menuOpen = true;
};

function slowScroll(id) {
  let offset = $('header').css('height');
  offset = offset.substring(0, offset.length - 2);
  $('html, body').animate({
    scrollTop: $(id).offset().top - (+offset + 5)
  }, 500);
  closeMenu();
  return menuOpen = false;
};

function closeMenu() {
  burger.classList.remove('active');
  menu.classList.remove('active');
  lock.classList.remove('lock');
};