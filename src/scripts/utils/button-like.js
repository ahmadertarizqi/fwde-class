import RestaurantIDB from '../APIs/favorite-restaurant-idb';
import { renderLikeButtonTemplate } from '../views/shared';

const ButtonLike = {
  async init({ buttonLikeContainer, restaurant }) {
    this._buttonLikeContainer = buttonLikeContainer;
    this._restaurant = restaurant;
    this._likeActive = false;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderUnlike();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await RestaurantIDB.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeActive = false;
    this._buttonLikeContainer.innerHTML = renderLikeButtonTemplate(this._likeActive);

    const btnLike = document.querySelector('#btnLike');
    btnLike.addEventListener('click', async () => {
      await RestaurantIDB.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderUnlike() {
    this._likeActive = true;
    this._buttonLikeContainer.innerHTML = renderLikeButtonTemplate(this._likeActive);

    const btnLike = document.querySelector('#btnLike');
    btnLike.addEventListener('click', async () => {
      await RestaurantIDB.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default ButtonLike;
