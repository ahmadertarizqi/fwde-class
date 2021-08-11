// it('should not show the unlike button when the restaurant has not been liked before', async () => {
//   document.body.innerHTML = '<div class="btn-like-container"></div>';
//   await ButtonLike.init({
//     buttonLikeContainer: document.querySelector('.btn-like-container'),
//     restaurant: {
//       id: '6u9lf7okjh9kfw1e867',
//     },
//   });

//   expect(document.querySelector('[aria-label=x"unlike this restaurant"]')).toBeFalsy();
// });

// it('should be able to like the movie', async () => {
//   document.body.innerHTML = '<div class="btn-like-container"></div>';
//   await ButtonLike.init({
//     buttonLikeContainer: document.querySelector('.btn-like-container'),
//     movie: {
//       id: '6u9lf7okjh9kfw1e867',
//     },
//   });

//   document.querySelector('#btnLike').dispatchEvent(new Event('click'));
//   const restaurant = RestaurantIDB.getRestaurant('6u9lf7okjh9kfw1e867');

//   expect(restaurant).toEqual({ id: '6u9lf7okjh9kfw1e867' });
// });