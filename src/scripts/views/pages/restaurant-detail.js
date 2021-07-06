import { createTemplateDetail } from '../templates/template-detail';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../APIs/restaurant-source';
import ButtonLike from '../../utils/button-like';
import { clearLoader, renderLoader, renderInfoError } from '../shared';

const RestaurantDetail = {
  async render() {
    return `
      <div class="subheader-info" style="background-image: url('./images/heros/hero-image_4.jpg');">
        <div class="container">
          <h2 class="subheader-info-title">Restaurant Detail</h2>
        </div>
      </div>

      <div class="page-detail-wrapper">
        <div class="container">
          <div id="loaderWrapper"></div>
          <div id="infoWrapper"></div>
          <div id="detailContent"></div>
        </div>
        <div class="btn-like-container"></div>
      </div>
    `;
  },

  async afterRender() {
    const loaderWrapper = document.querySelector('#loaderWrapper');
    renderLoader(loaderWrapper);

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantSource.getRestaurant(url.id);
      const detailContainer = document.querySelector('#detailContent');

      clearLoader();
      detailContainer.innerHTML = createTemplateDetail(restaurant);
      ButtonLike.init({
        buttonLikeContainer: document.querySelector('.btn-like-container'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          rating: restaurant.rating,
          pictureId: restaurant.pictureId,
          description: restaurant.description,
          city: restaurant.city,
        },
      });
    } catch (error) {
      const infoWrapper = document.querySelector('#infoWrapper');
      clearLoader();
      renderInfoError(infoWrapper);
    }
  },
};

export default RestaurantDetail;
