import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    sourcemap: true,

    rollupOptions: {
      input: {
        main: 'index.html',
        sw: 'src/service-worker.ts',
      },
      output: {
        entryFileNames: (chunk) => {
          if (chunk.name === 'sw') {
            return 'sw.js';
          }
          return 'assets/[name]-[hash].js';
        },
      },
    },
  },
});