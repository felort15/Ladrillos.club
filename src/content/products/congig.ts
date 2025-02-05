import { defineCollection, z } from "astro:content";

const products = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        published: z.date(),
        heroImage: z.string(),
        price: z.number(),
        category: z.string(),
    }),
});
