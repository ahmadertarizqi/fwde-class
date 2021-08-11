import { icons } from 'feather-icons';
import { getImage, truncateString } from '../utils/common';

class RestaurantItem extends HTMLElement {
  set setRestaurant(restaurant) {
    this._restaurant = restaurant;
    this.renderElement();
  }

  renderElement() {
    this.innerHTML = `
      <div class="restaurant__card">
        <div class="restaurant__card-head">
          <figure class="image">
              <img data-src="${getImage(this._restaurant.pictureId, 'sm')}" class="lazyload" alt="${this._restaurant.name} Image" />
          </figure>
          <span class="rating-item">${icons.star.toSvg()} ${this._restaurant.rating}</span>
        </div>
        <div class="restaurant__card-body">
          <span class="location">${icons['map-pin'].toSvg()} ${this._restaurant.city}</span>
          <a href="#/detail/${this._restaurant.id}" class="name">${this._restaurant.name}</a>
          <p class="description">${truncateString(this._restaurant.description, 20, '...')}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
