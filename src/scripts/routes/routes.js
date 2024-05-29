import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import AboutUs from '../views/pages/about-us';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/about-us': AboutUs,
};

export default routes;
