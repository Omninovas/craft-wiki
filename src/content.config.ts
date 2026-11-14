import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { pageTypes } from './data/pageCategories.mjs';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // The slug of another page in the same app folder. The sidebar lists this page under that one.
        parent: z.string().optional(),
        // The kind of page. Category cards show it as a badge.
        type: z.enum(Object.keys(pageTypes) as [string, ...string[]]).optional(),
        // The group the page belongs to in category grids and in the app sidebar.
        category: z.string().optional(),
        // A smaller group inside the category, shown in category grids.
        subcategory: z.string().optional(),
        // The card picture: an image under /assets/uploads/<app>/.
        cover: z.string().regex(/^\/assets\/uploads\/[a-z0-9-]+\/[^/]+\.(webp|png|jpe?g|avif)$/, 'cover must be an image path under /assets/uploads/<app>/').optional(),
        // One line for the card. Cards use the description when the page has no summary.
        summary: z.string().optional(),
      }),
    }),
  }),
};
