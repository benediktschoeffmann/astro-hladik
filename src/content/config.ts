import { z, defineCollection } from 'astro:content';

// const blogCollection = defineCollection({ /* ... */ });

const articleCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        publishDate: z.date(),
        leadText: z.string(),
        icon: z.string().optional(),
        teaserImage: z.string().optional(),
        tags: z.array()[z.string(), z.optional()]
    })
 });

export const collections = {
    // 'blog': blogCollection,
    'articles': articleCollection
  };