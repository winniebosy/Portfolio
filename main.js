'use strict'

const nav = document.querySelector('#nav');
const menu =document.querySelector('#menu');
const menuToggle = document.querySelector('.nav-toggle');
let isMenuOpen = false;


//toggle menu active state

menuToggle.addEventListener('click', e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;

  //toggle a11y attributes and active class

  menuToggle.setAttribute('aria-expanded' , String(isMenuOpen));
  menu.hidden =  !isMenuOpen;
  nav.classList.toggle('nav--open');

});





