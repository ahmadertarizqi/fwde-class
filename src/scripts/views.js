import { icons } from 'feather-icons';
import data from '../DATA.json';
import { truncateString } from './utilities';

function renderResturantList() {
  const parentElem = document.querySelector('.restaurant__list');
  const { restaurants } = data;

  let markup = '';
  restaurants.forEach((restaurant) => {
    markup = `
      <div class="restaurant__item">
        <div class="restaurant__card">
            <div class="restaurant__card-head">
              <figure class="image">
                  <img src="${restaurant.pictureId}" alt="${restaurant.name} Image" />
              </figure>
              <span class="rating-item">${icons.star.toSvg()} ${restaurant.rating}</span>
            </div>
            <div class="restaurant__card-body">
              <span class="location">${icons['map-pin'].toSvg()} ${restaurant.city}</span>
              <h3 class="name">${restaurant.name}</h3>
              <p class="description">${truncateString(restaurant.description, 20, '...')}</p>
            </div>
        </div>
      </div>
    `;
    parentElem.insertAdjacentHTML('beforeend', markup);
  });
}

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
  renderResturantList();
  stickyHeader();
});
