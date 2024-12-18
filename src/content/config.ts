import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    readTime: z.string(),
    date: z.date(),
    image: z.enum(['polki', 'dogFood']),
  }),
});

export const collections = { blog }; 