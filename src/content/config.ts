import { defineCollection, z } from 'astro:content';

const validImageKeys = ['dog-food', 'polki', '2psy', 'pet-store-1'] as const;

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      excerpt: z.string(),
      date: z.date(),
      author: z.string(),
      image: z.enum(validImageKeys),
      category: z.string(),
      readTime: z.string()
    })
  })
}; 