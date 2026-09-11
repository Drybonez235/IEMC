import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";
//npm install tailwindcss @tailwindcss/vite
//npm install -D @tailwindcss/typography

import sitemap from '@astrojs/sitemap';
//npm run astro add sitemap

import cloudflare from '@astrojs/cloudflare';



export default defineConfig({
  trailingSlash: 'always',
output: 'static',
  build: {
    format: 'directory', // Ensures pages are built as /page/index.html
  },

  site: 'https://illinoiseventmanagement.com',

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
    open: true, 
  },

  integrations: [sitemap()],
  adapter: cloudflare(),
});