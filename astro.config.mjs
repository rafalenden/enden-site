import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://enden.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  output: 'static',
});
