import type { ImageMetadata } from "astro";

export interface Article {
  title: string;
  slug: string;
  description: string;
  content: string;
  image: ImageMetadata;
}
