import HomePage from '../views/pages/homepage';
import RestaurantDetail from '../views/pages/restaurant-detail';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': HomePage,
  '/homepage': HomePage,
  '/favorites': Favorites,
  '/detail/:id': RestaurantDetail,
};

export default routes;
