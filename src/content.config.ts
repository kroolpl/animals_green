// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    readTime: z.string(),
    date: z.date(),
    image: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog,
}; 