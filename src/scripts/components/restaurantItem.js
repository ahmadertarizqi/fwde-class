import { icons } from 'feather-icons';
import { truncateString } from '../utilities';

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    console.log('restaurant constructor');
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.renderElement();
  }

  renderElement() {
    this.innerHTML = `
      <div class="restaurant__item">
        <div class="restaurant__card">
          <div class="restaurant__card-head">
            <figure class="image">
                <img src="${this._restaurant.pictureId}" alt="${this._restaurant.name} Image" />
            </figure>
            <span class="rating-item">${icons.star.toSvg()} ${this._restaurant.rating}</span>
          </div>
          <div class="restaurant__card-body">
            <span class="location">${icons['map-pin'].toSvg()} ${this._restaurant.city}</span>
            <h3 class="name">${this._restaurant.name}</h3>
            <p class="description">${truncateString(this._restaurant.description, 20, '...')}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
