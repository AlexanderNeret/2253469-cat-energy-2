/* в этот файл добавляет скрипты*/
// eslint-disable-next-line no-unused-vars

const button = document.querySelector('.main-nav__toggle');

const nav = document.querySelector('nav');

nav.classList.remove('.no-js');

button.addEventListener('click', () => {
  nav.classList.toggle('main-nav--opened');
  if(nav.classList.contains('main-nav--opened')){
    button.classList.remove('main-nav__toggle--burger');
    button.classList.add('main-nav__toggle--open');
  } else{
    button.classList.add('main-nav__toggle--burger');
    button.classList.remove('main-nav__toggle--open');
  }
});

