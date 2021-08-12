import RestaurantIDB from '../../APIs/favorite-restaurant-idb';

const Favorites = {
  async render() {
    return `
      <div class="subheader-info">
        <div class="container">
          <h2 class="subheader-info-title">Restaurant Favorites</h2>
        </div>
      </div>

      <div class="page-detail-wrapper">
        <div class="container">
          <restaurant-list class="restaurant__list"></restaurant-list>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // call after render
    const restaurantList = document.querySelector('restaurant-list');
    const restaurants = await RestaurantIDB.getAllRestaurant();
    restaurantList.setRestaurants = restaurants;
  },
};

export default Favorites;
