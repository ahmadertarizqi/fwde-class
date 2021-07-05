import './components/restaurantList';
import './components/restaurantItem';

import 'regenerator-runtime'; /* for async await transpile */
import './views/index';
import '../styles/index.css';

import App from './views/init';
import swRegister from './utils/sw-register';

const appInit = new App({
  body: document.querySelector('body'),
  content: document.querySelector('#rootContent'),
});

window.addEventListener('hashchange', () => {
  appInit.renderPage();
});

window.addEventListener('load', () => {
  appInit.renderPage();
  swRegister();
});
