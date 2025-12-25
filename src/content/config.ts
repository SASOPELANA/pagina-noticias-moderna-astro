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

const categoryIndexCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      categoriesImg: image(),
      cards: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      ),
    }),
});

const categoriesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subTitle: z.string(),
      description: z.string(),
      image: image(),
      dia: z.string(),
      mes: z.string(),
    }),
});

export const collections = {
  popular: popularCollection,
  "category-index": categoryIndexCollection,
  categories: categoriesCollection,
};
