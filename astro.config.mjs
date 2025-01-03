// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import swup from '@swup/astro';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

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
    }),
    mdx({
      extendMarkdownConfig: true,
      optimize: true
    }),
    sitemap({
      i18n: {
        defaultLocale: 'pl',
        locales: {
          pl: 'pl-PL'
        },
      },
      // List of URLs to exclude from the sitemap
      filter: (page) => !page.includes('/admin/'),
      // Change the output file (defaults to sitemap-index.xml)
      outfile: 'sitemap.xml',
      // Add a custom lastmod date
      lastmod: new Date(),
    }),
  ],
  site: 'https://animals.glogow.pl',
  base: '/',
});
