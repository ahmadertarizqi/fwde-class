import RestaurantSource from '../../APIs/restaurant-source';
import { clearLoader, renderInfoError, renderLoader } from '../shared';

const HomePage = {
  async render() {
    return `
      <section class="main-hero" style="background-image: url('./images/heros/hero-image_4.jpg');">
        <div class="container">
          <div class="content">
            <h2 class="title">- Welcome to <span class="highlight">Healfoo Restaurant</span> -</h2>
            <h3 class="caption">The Best <span class="highlight">Healthy</span> Foods & <span class="highlight">Quality</span> Foods</h3>
            <p class="subcaption">Healfoo is a restaurant, located on Surabaya - Indonesia. We have awesome recipes and the most talented chefs in town.</p>
          </div>
        </div>
        <div class="menu-bottom-bg">
          <img src="./images/bg-orange-section-bottom.png" alt="menu-bottom-bg" />
        </div>
      </section>

      <section id="mainContent" class="explore-restaurant">
        <div class="container">
          <h2 class="title">Explore Restaurant</h2>
          <div id="loaderWrapper"></div>
          <div id="infoWrapper"></div>
          <restaurant-list class="restaurant__list"></restaurant-list>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const loaderWrapper = document.querySelector('#loaderWrapper');
    renderLoader(loaderWrapper);

    try {
      const restaurantList = document.querySelector('restaurant-list');
      const restaurants = await RestaurantSource.getRestaurants();
      clearLoader();
      restaurantList.setRestaurants = restaurants;
    } catch (error) {
      const infoWrapper = document.querySelector('#infoWrapper');
      clearLoader();
      renderInfoError(infoWrapper);
    }
  },
};

export default HomePage;
