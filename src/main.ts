import { mount } from 'svelte'
import App from './App.svelte'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
