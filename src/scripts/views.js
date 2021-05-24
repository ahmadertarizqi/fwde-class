import data from '../DATA.json';
import { icons } from 'feather-icons';
import { truncateString } from './utilities';

function showRestaurantList() {
   const parentElement = document.querySelector('.restaurant__list');
   const { restaurants } = data;
   
   let markup = '';
   restaurants.forEach(restaurant => {
      markup = `
         <div class="restaurant__item">
            <div class="restaurant__card">
               <figure class="restaurant__card-head">
                  <img src="${restaurant.pictureId}" alt="restaurant-image-item" />
                  <span class="rating-item">${icons['star'].toSvg()} ${restaurant.rating}</span>
               </figure>
               <div class="restaurant__card-body">
                  <span class="location">${icons['map-pin'].toSvg()} ${restaurant.city}</span>
                  <h4 class="name">${restaurant.name}</h4>
                  <p class="description">${truncateString(restaurant.description, 25, '...')}</p>
               </div>
            </div>
         </div>
      `;

      parentElement.insertAdjacentHTML('beforeend', markup);
   });
}

document.addEventListener('DOMContentLoaded', function() {
   // === NAVBAR MENU ===
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
      if(findBackdropElement) {
         menuNavbar.parentNode.removeChild(backdropElements[0]);
      }
   });
   // === NAVBAR MENU ===

   showRestaurantList();
});