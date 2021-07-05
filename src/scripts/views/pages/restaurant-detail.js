import { createTemplateDetail } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../APIs/restaurant-source';
import ButtonLike from '../../utils/button-like';

const RestaurantDetail = {
  async render() {
    return `
      <div class="subheader-info" style="background-image: url('./images/heros/hero-image_4.jpg');">
        <div class="container">
          <h2 class="subheader-info-title">Restaurant Detail</h2>
        </div>
      </div>

      <div class="page-detail-wrapper">
        <div class="container" id="detailContent"></div>
        <div class="btn-like-container"></div>
      </div>
    `;
  },

  async afterRender() {
    // call after render
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurant(url.id);
    const detailContainer = document.querySelector('#detailContent');
    detailContainer.innerHTML = createTemplateDetail(restaurant);

    ButtonLike.init({
      buttonLikeContainer: document.querySelector('.btn-like-container'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
      },
    });
  },
};

export default RestaurantDetail;
