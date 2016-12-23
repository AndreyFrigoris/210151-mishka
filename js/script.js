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

var link = document.querySelectorAll('.modal-btn');

if(link.length > 0) {
  var modal = document.querySelector('.modal');
  var overlay = document.querySelector('.overlay');

  for(var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function(event) {
      event.preventDefault();
      modal.classList.add('modal--show');
      overlay.classList.add('overlay--show');
    })
  }

  overlay.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.remove('modal--show');
    overlay.classList.remove('overlay--show');
  })
}
