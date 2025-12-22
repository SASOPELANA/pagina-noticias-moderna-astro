import { defineCollection, z } from "astro:content";

const popularCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subTitle: z.string(),
      description: z.string(),
      dia: z.string(),
      mes: z.string(),
      image: image(),
    }),
});

export const collections = {
  popular: popularCollection,
};
