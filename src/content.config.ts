import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    category: z.enum(['concepts', 'instruments', 'actors', 'frameworks', 'case-studies']),
    type: z.enum(['article', 'case-study']).default('article'),
    stats: z.array(z.object({ value: z.string(), label: z.string() })),
    seeAlso: z.array(z.object({
      title: z.string(),
      category: z.string(),
      description: z.string(),
      slug: z.string()
    })),
    unexpected: z.object({
      headline: z.string(),
      body: z.string()
    }).optional(),
    sources: z.array(z.string()).optional(),
    caseStudy: z.object({
      body: z.string().optional(),
      economistBody: z.string().optional(),
      natureBody: z.string().optional(),
      visualFormat: z.enum(['timeline', 'before-after']).optional(),
      timeline: z.array(z.object({ year: z.string(), description: z.string() })).optional(),
      before: z.array(z.string()).optional(),
      after: z.array(z.string()).optional(),
      debate: z.string().optional()
    }).optional()
  })
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tag: z.string().default('News'),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    source: z.object({ name: z.string(), url: z.string().url() }),
    related: z.array(z.object({
      title: z.string(),
      category: z.string(),
      slug: z.string(),
      description: z.string().optional()
    })).optional()
  })
});

export const collections = { articles, news };
