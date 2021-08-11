class RestaurantList extends HTMLElement {
  set setRestaurants(restaurants) {
    this._restaurants = restaurants;
    this.renderElement();
  }

  renderElement() {
    if (this._restaurants.length > 0) {
      this._renderRestaurants();
    } else {
      this._renderEmptyRestaurants();
    }
  }

  _renderRestaurants() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.setRestaurant = restaurant;
      restaurantItem.setAttribute('id', restaurant.id);
      restaurantItem.setAttribute('class', 'restaurant__item');
      this.appendChild(restaurantItem);
    });
  }

  _renderEmptyRestaurants() {
    this.innerHTML = `
      <div class="restaurant__not-found">
        <h1>Restaurant Favorites Not Found</h1>
      </div>
    `;
  }
}

customElements.define('restaurant-list', RestaurantList);
