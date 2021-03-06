import Swiper from '../swiper/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__button--next',
    prevEl: '.swiper__button--prev',
  },
});

export { swiper };
