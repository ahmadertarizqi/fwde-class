class RestaurantList extends HTMLElement {
  set setRestaurants(restaurants) {
    this._restaurants = restaurants;
    this.renderElement();
  }

  renderElement() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.setRestaurant = restaurant;
      restaurantItem.setAttribute('id', restaurant.id);
      restaurantItem.setAttribute('class', 'restaurant__item');
      this.appendChild(restaurantItem);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
