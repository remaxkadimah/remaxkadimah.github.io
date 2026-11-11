// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: https://remaxkadimah.github.io/
// Com domínio próprio, use SITE=https://seu.dominio
export default defineConfig({
  site: process.env.SITE ?? 'https://remaxkadimah.github.io',
  base: process.env.BASE_PATH ?? '/',
  vite: { plugins: [tailwindcss()] },
});
