// src/content/config.ts
import { z, defineCollection } from 'astro:content';

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

const services = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      topper: z.string(),
      title: z.string(),
      text: z.string(),
      image: z.string(),
      imageAlt: z.string(),
      buttonText: z.string(),
      buttonHref: z.string(),
    }),
    tableOfContents: z.array(z.object({
      text: z.string(),
      slug: z.string(),
    })),
    contentSections: z.array(z.object({
      id: z.string(),
      heading: z.string(),
      text: z.string(),
      servicesTitle: z.string(),
      services: z.array(z.string()),
      buttonText: z.string(),
      buttonHref: z.string(),
      imageSrc: z.string(),
      imageAlt: z.string(),
      reversed: z.boolean().default(false),
    })),
    beforeAfter: z.object({
      id: z.string(),
      title: z.string(),
      text: z.string(),
      beforeImage: z.string(),
      beforeAlt: z.string(),
      afterImage: z.string(),
      afterAlt: z.string(),
      projectItems: z.array(z.string()),
    }).optional(),
    faq: z.object({
      title: z.string(),
      topper: z.string(),
      faqs: z.array(z.object({
        question: z.string(),
        answer: z.string(),
        isActive: z.boolean().default(false),
      })),
    }),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  blog,
  services,
};
