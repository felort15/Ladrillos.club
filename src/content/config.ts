import { defineCollection, z } from 'astro:content';

export const collections = {
  'products': defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      price: z.number(),
      published: z.string(),
      heroImage: z.string()
    })
  })
}; 