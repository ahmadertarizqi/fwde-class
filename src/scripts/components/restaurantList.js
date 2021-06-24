class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    console.log(restaurants);
    this._restaurants = restaurants;
    this.renderElement();
  }

  renderElement() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const createItem = document.createElement('restaurant-item');
      createItem.restaurant = restaurant;
      createItem.setAttribute('id', restaurant.id);
      createItem.setAttribute('class', 'restaurant__item');
      this.appendChild(createItem);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
