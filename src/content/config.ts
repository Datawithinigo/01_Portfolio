import { defineCollection, z } from "astro:content";
// z -> zod schema

const my_projects = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string().url(),
      usa: z.string().url(),
    }),
  })
})

export const collections = { my_projects }