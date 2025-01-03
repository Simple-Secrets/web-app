import './i18n'; // Импортируем настройки локализации
import { waitLocale } from 'svelte-i18n';
import { mount } from 'svelte';
import App from './App.svelte';

let app

(async () => {
  await waitLocale();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }

  app = mount(App, {
    target: document.getElementById('app')!,
  });
})();

export default app;