// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://felort15.github.io',
  base: '/Ladrillos.club',
  output: 'static',
  build: {
    assets: '_assets'
  },
  integrations: [tailwind(), react(), mdx()]
});