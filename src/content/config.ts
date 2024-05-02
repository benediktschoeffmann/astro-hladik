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
        tags: z.array(z.string().optional())
    })
});

export const collections = {
    'articles': articleCollection
};