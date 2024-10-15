// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), sitemap(), svelte()],
  vite: {
    plugins: [
        Icons({
          compiler: "svelte",
        })
    ]
  }
});