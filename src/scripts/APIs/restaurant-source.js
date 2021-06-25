import config from '../config';

class RestaurantSource {
  static async getRestaurants() {
    const response = await fetch(`${config.BASE_URL}/list`);
    const { restaurants } = await response.json();
    return restaurants;
  }

  static async getRestaurant(id) {
    const response = await fetch(`${config.BASE_URL}/detail/${id}`);
    const { restaurant } = await response.json();
    return restaurant;
  }

  static async searchRestaurant(query) {
    const response = await fetch(`${config.BASE_URL}/search?q=${query}`);
    const { restaurants } = await response.json();
    return restaurants;
  }
}

export default RestaurantSource;
