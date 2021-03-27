'use strict';

(function () {
  const navMain = document.querySelector('.page-header__main-nav');
  const navToggle = document.querySelector('.page-header__main-nav-toggle');
  const menuItems = document.querySelectorAll('.page-header__site-menu-item');

  if (navMain && navToggle) {
    navMain.classList.remove('page-header__main-nav--nojs')
    navMain.classList.add('page-header__main-nav--closed');

    navToggle.addEventListener('click', function() {
      navMain.classList.toggle('page-header__main-nav--closed');
    });

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', function() {
        navMain.classList.toggle('page-header__main-nav--closed');
      });
    });
  }
})();
