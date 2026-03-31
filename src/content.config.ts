import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    role: z.string(),
    timeline: z.string(),
    team: z.string().optional(),
    tools: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string(),
    heroImage: z.string(),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(0),
    gridSize: z.enum(['large', 'medium', 'small']).default('medium'),
    publishDate: z.coerce.date(),
    externalUrl: z.string().url().optional(),
    video: z.string().optional(),
    heroFit: z.enum(['cover', 'contain']).default('cover'),
  }),
});

export const collections = { projects };
