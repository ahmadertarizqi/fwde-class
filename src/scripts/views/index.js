import App from './init';

function stickyHeader() {
  const headerElement = document.querySelector('.header');
  const navbarElement = document.querySelector('.navbar');
  const navbarHeight = navbarElement.getBoundingClientRect().height;

  const handleIntersection = (entries) => {
    const [entry] = entries;
    // console.log(entry.isIntersecting);
    if (!entry.isIntersecting) {
      navbarElement.classList.add('is-sticky');
      navbarElement.classList.remove('is-transparent');
    } else {
      navbarElement.classList.remove('is-sticky');
      navbarElement.classList.add('is-transparent');
    }
  };

  const headerObserver = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0,
    rootMargin: `${navbarHeight}px`,
  });
  headerObserver.observe(headerElement);
}

function navbarMenu() {
  const menuNavbar = document.querySelector('.navbar__menu');
  const btnToggleNavbar = document.querySelector('.navbar--toggler');
  const btnCloseNavbar = document.querySelector('.navbar--close');
  const overlayClasses = 'backdrop-overlay';

  btnToggleNavbar.addEventListener('click', (ev) => {
    ev.preventDefault();
    menuNavbar.classList.toggle('is-opened');
    document.body.style.overflow = 'hidden';

    const backdropElement = document.createElement('div');
    backdropElement.classList.add(overlayClasses);
    menuNavbar.parentNode.insertBefore(backdropElement, menuNavbar.nextSibling);
  });

  btnCloseNavbar.addEventListener('click', (ev) => {
    ev.preventDefault();
    menuNavbar.classList.toggle('is-opened');
    document.body.style.overflow = 'initial';

    const findBackdropElement = menuNavbar.parentNode.querySelectorAll(`.${overlayClasses}`);
    const backdropElements = [].slice.call(findBackdropElement, 0);
    if (findBackdropElement) {
      menuNavbar.parentNode.removeChild(backdropElements[0]);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  navbarMenu();
  stickyHeader();
});

const appInit = new App({
  body: document.querySelector('body'),
  content: document.querySelector('#rootContent'),
});

window.addEventListener('hashchange', () => {
  appInit.renderPage();
});

window.addEventListener('load', () => {
  appInit.renderPage();
});
