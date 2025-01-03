import { mount } from 'svelte'
import './global.css'
import App from './App.svelte'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log('Service Worker registered');
  }).catch((error) => {
    console.log('Service Worker registration failed:', error);
  });
}

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
