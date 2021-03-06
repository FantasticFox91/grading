const burgerButton = document.querySelector('.main-nav__toggle');
burgerButton.classList.remove('main-nav__toggle--noJS');
burgerButton.classList.add('main-nav__toggle--close');

const setEventListener = () => {
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('main-nav__toggle--close')
    burgerButton.classList.toggle('main-nav__toggle--open');
  });
}

export { setEventListener };
