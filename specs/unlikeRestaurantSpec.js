/* eslint-disable no-undef */
import RestaurantIDB from '../src/scripts/APIs/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unlike a Restaurant', () => {
  beforeEach(async () => {
    TestFactories.renderLikeButtonContainer();
    await RestaurantIDB.putRestaurant({ id: '6u9lf7okjh9kfw1e867' });
  });

  afterEach(async () => {
    await RestaurantIDB.deleteRestaurant('6u9lf7okjh9kfw1e867');
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createButtonLikeInitiator({ id: '6u9lf7okjh9kfw1e867' });

    const buttonLikeElement = document.querySelector('[aria-label="unlike this restaurant"]');
    expect(buttonLikeElement).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createButtonLikeInitiator({ id: '6u9lf7okjh9kfw1e867' });

    const buttonLikeElement = document.querySelector('[aria-label="like this restaurant"]');
    expect(buttonLikeElement).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createButtonLikeInitiator({ id: '6u9lf7okjh9kfw1e867' });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    const restaurants = await RestaurantIDB.getAllRestaurant();
    expect(restaurants).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createButtonLikeInitiator({ id: '6u9lf7okjh9kfw1e867' });

    await RestaurantIDB.deleteRestaurant('6u9lf7okjh9kfw1e867');

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    const restaurants = await RestaurantIDB.getAllRestaurant();
    expect(restaurants).toEqual([]);
  });
});
