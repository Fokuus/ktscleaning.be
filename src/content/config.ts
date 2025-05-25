// src/content/config.ts
import { z, defineCollection } from 'astro:content';

// Define a schema for each collection
const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.date(),
    image: image(),
    imageAlt: z.string(),
    logo: z.string().optional(),
    isFeatured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    image: image(),
    imageAlt: z.string(),
    isFeatured: z.boolean().default(false),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects,
  blog,
};
