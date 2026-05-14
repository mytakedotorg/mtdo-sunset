import { defineCollection, z } from "astro:content";

const minutes = defineCollection({
  type: "content",
  schema: z.object({}).passthrough().optional(),
});

export const collections = { minutes };
