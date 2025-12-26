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
          slug: z.string(),
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

const newCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subTitle: z.string().optional(),
      description: z.string(),
      image: image(),
    }),
});

const trendingCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subTitle: z.string().optional(),
      description: z.string(),
      image: image(),
      order: z.number().optional(),
    }),
});

const articlesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      number: z.string(),
      title: z.string(),
      description: z.string(),
      image: image(),
      url: z.string().optional(),
    }),
});

export const collections = {
  popular: popularCollection,
  "category-index": categoryIndexCollection,
  categories: categoriesCollection,
  new: newCollection,
  trending: trendingCollection,
  articles: articlesCollection,
};
