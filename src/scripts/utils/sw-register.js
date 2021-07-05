import { Workbox } from 'workbox-window';

function swRegister() {
  if ('serviceWorker' in navigator) {
    const workbox = new Workbox('../service-worker.js');
    workbox.register();
  }
}

export default swRegister;
