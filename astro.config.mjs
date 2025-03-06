// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourusername.github.io',  // Replace with your GitHub username
  base: '/Ladrillos.club',  // Replace with your repository name
  integrations: [tailwind(), react(), mdx()]
});