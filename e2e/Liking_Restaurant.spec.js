const assert = require('assert');

/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('Like one restaurant', async ({ I }) => {
  I.wait(5);
  I.see('Restaurant Favorites Not Found', '.restaurant__not-found');
  I.amOnPage('/');

  I.seeElement('.restaurant__card-body a.name');

  const firstRestaurant = locate('.restaurant__card-body a.name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#btnLike');
  I.click('#btnLike');

  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant__item');

  const isLikedRestaurantTitle = await I.grabTextFrom('.restaurant__card-body a.name');
  assert.strictEqual(firstRestaurantTitle, isLikedRestaurantTitle);

  // pause();
});
