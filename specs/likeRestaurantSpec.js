/* eslint-disable no-undef */
import RestaurantIDB from '../src/scripts/APIs/favorite-restaurant-idb';
import ButtonLike from '../src/scripts/utils/button-like';
import * as TestFactories from './helpers/testFactories';

describe('Like a Movie', () => {
  beforeEach(() => {
    TestFactories.renderLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createButtonLikeInitiator({ id: '6u9lf7okjh9kfw1e867' });

    const buttonLikeElement = document.querySelector('[aria-label="like this restaurant"]');
    expect(buttonLikeElement).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createButtonLikeInitiator({ id: '6u9lf7okjh9kfw1e867' });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createButtonLikeInitiator({ id: '6u9lf7okjh9kfw1e867' });

    document.querySelector('#btnLike').dispatchEvent(new Event('click'));
    const restaurant = await RestaurantIDB.getRestaurant('6u9lf7okjh9kfw1e867');

    expect(restaurant).toEqual({ id: '6u9lf7okjh9kfw1e867' });
    RestaurantIDB.deleteRestaurant('6u9lf7okjh9kfw1e867');
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createButtonLikeInitiator({ id: '6u9lf7okjh9kfw1e867' });

    // add/update restaurant to restaurant favorites
    await RestaurantIDB.putRestaurant({ id: '6u9lf7okjh9kfw1e867' });
    // simulation add restaurant to favorite
    document.querySelector('#btnLike').dispatchEvent(new Event('click'));
    // is restaurant exist, and no duplicate
    const restaurants = await RestaurantIDB.getAllRestaurant();
    expect(restaurants).toEqual([{ id: '6u9lf7okjh9kfw1e867' }]);
    RestaurantIDB.deleteRestaurant('6u9lf7okjh9kfw1e867');
  });

  it('should not add a restaurant when it has no id', async () => {
    await ButtonLike.init({
      buttonLikeContainer: document.querySelector('.btn-like-container'),
      restaurant: {},
    });

    // simulation add restaurant to favorite
    document.querySelector('#btnLike').dispatchEvent(new Event('click'));
    // get restaurants
    const restaurants = await RestaurantIDB.getAllRestaurant();
    expect(restaurants).toEqual([]);
  });
});
