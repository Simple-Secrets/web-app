// eslint-disable-next-line import/no-unresolved
import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess(),
}
