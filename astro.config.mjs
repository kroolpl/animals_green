// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs(),
    swup({
      theme: 'slide',
      animationClass: 'transition-',
      containers: ['#swup'],
      cache: true,
      preload: true,
      accessibility: true,
      updateHead: true,
      smoothScrolling: true,
      animateHistoryBrowsing: true,
    })
  ],
});
