import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    area: z.string(),
    status: z.enum(['Ongoing research', 'In development']),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    methods: z.array(z.string()).default([]),
    repository: z.url().optional(),
  }),
});

const contributions = defineCollection({
  loader: glob({ base: './src/content/contributions', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).default([]),
    year: z.number(),
    venue: z.string(),
    type: z.enum(['Publication', 'Abstract', 'Poster', 'Oral presentation', 'Talk', 'Other']),
    doi: z.string().optional(),
    url: z.url().optional(),
    pdf: z.string().optional(),
    presentationDate: z.string().optional(),
    status: z.enum(['Published', 'Accepted', 'In preparation']),
  }),
});

export const collections = { projects, contributions };
