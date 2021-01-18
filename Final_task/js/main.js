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
  let offset = 50;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 500);
  return menuOpen = false;
};

function checkMenu() {
  if (menuOpen == true) {
    console.log('hi');
  };
};


function closeMenu() {
  burger.classList.remove('active');
  menu.classList.remove('active');
  lock.classList.remove('lock');
};

menuBtn.onclick = closeMenu;