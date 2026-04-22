import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lynnleadgen.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    react(),
    sitemap(),
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  vite: {
    define: {
      'process.env.API_KEY': JSON.stringify(process.env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY),
    },
  },
});
