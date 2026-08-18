import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sesionesEspeciales = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sesiones-especiales' }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    subtitulo: z.string(),
    imagen: image(),
    activa: z.boolean(),
    whatsappTexto: z.string(),
  }),
});

export const collections = { sesionesEspeciales };