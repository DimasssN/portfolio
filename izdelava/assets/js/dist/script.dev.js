"use strict";

(function () {
  var doc = document.documentElement;
  var w = window;
  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;
  var header = document.getElementById('site-header');

  var checkScroll = function checkScroll() {
    curScroll = w.scrollY || doc.scrollTop;

    if (curScroll > prevScroll) {
      direction = 2;
    } else if (curScroll < prevScroll) {
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function toggleHeader(direction, curScroll) {
    if (direction === 2 && curScroll > 52) {
      header.classList.add('hide');
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);
})();

function burgerMenu(selector) {
  var menu = $(selector);
  var button = menu.find('.burger-menu_button', '.burger-menu_lines');
  var links = menu.find('.burger-menu_link');
  var overlay = menu.find('.burger-menu_overlay');
  button.on('click', function (e) {
    e.preventDefault();
    toggleMenu();
  });
  links.on('click', function () {
    return toggleMenu();
  });
  overlay.on('click', function () {
    return toggleMenu();
  });

  function toggleMenu() {
    menu.toggleClass('burger-menu_active');

    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');

(function () {
  var doc = document.documentElement;
  var w = window;
  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;
  var header = document.getElementById('site-header');

  var checkScroll = function checkScroll() {
    curScroll = w.scrollY || doc.scrollTop;

    if (curScroll > prevScroll) {
      direction = 2;
    } else if (curScroll < prevScroll) {
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function toggleHeader(direction, curScroll) {
    if (direction === 2 && curScroll > 52) {
      header.classList.add('hide');
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);
})();