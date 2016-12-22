'use strict';

var navHeader = document.querySelector('.main-nav');
var navButton = document.querySelector('.page-header__toggle-wrapper');
var navToggle = document.querySelector('.page-header__toggle');

navHeader.classList.remove('main-nav--nojs');
navToggle.classList.remove('page-header__toggle--nojs');

navButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (navHeader.classList.contains('main-nav--closed')) {
    navHeader.classList.remove('main-nav--closed');
    navHeader.classList.add('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle--opened');
  } else {
    navHeader.classList.add('main-nav--closed');
    navHeader.classList.remove('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--opened');
    navToggle.classList.add('page-header__toggle--closed');
  }
});
