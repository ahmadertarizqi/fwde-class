import ButtonLike from '../../src/scripts/utils/button-like';

export const renderLikeButtonContainer = () => {
  document.body.innerHTML = '<div class="btn-like-container"></div>';
};

export const createButtonLikeInitiator = async (restaurant) => {
  await ButtonLike.init({
    buttonLikeContainer: document.querySelector('.btn-like-container'),
    restaurant,
  });
};
