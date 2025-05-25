import { defineCollection, z } from 'astro:content';

// Define the schema for the portfolio collection
const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
    layout: z.enum(['regular', 'tall', 'wide']).default('regular'),
    order: z.number().default(0),
    date: z.date(),
  }),
});

// Define the schema for the blog collection
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    image: z.string(),
    imageAlt: z.string(),
    isFeatured: z.boolean().default(false),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  'portfolio': portfolioCollection,
  'blog': blogCollection,
};
