import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    readTime: z.string(),
    date: z.date(),
    image: z.enum(['polki', 'dogFood']),
  }),
});

export const collections = {
  blog: blog,
}; 