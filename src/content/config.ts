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
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    categories: z.array(z.string()).default(['general']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  'portfolio': portfolioCollection,
  'blog': blogCollection,
};
