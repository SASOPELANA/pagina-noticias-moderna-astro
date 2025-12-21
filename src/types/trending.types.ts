import type { ImageMetadata } from "astro";

export interface TrendingType {
  title: string;
  slug: string;
  description: string;
  content: string;
  image: ImageMetadata;
}
