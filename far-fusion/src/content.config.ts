import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sesionesEspeciales = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sesiones-especiales' }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    subtitulo: z.string(),
    imagen: image(),
    activa: z.boolean(),
    mostrarPacks: z.boolean().default(true),
    mostrarFaqs: z.boolean().default(true),
    whatsappTexto: z.string(),
    slug: z.string(),
    descripcion: z.string(),
    galeria: z.array(image()).optional(),
    videoEmbed: z.string().optional(),
    packs: z.array(z.object({
      nombre: z.string(),
      tagline: z.string(),
      items: z.array(z.string()),
      precio: z.string(),
      precioCuotas: z.string().optional(),
      linkReserva: z.string(),
    })).optional(),
    faqs: z.array(z.object({
      pregunta: z.string(),
      respuesta: z.string(),
    })).optional(),
  }),
});

const sesionesFijas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sesiones-fijas' }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    slug: z.string(),
    descripcion: z.string(),
    imagenHero: image(),
    packs: z.array(z.object({
      nombre: z.string(),
      tagline: z.string(),
      items: z.array(z.string()),
      precio: z.string(),
      precioCuotas: z.string().optional(),
      linkReserva: z.string(),
    })),
    faqs: z.array(z.object({
      pregunta: z.string(),
      respuesta: z.string(),
    })),
  }),
});

export const collections = { sesionesEspeciales, sesionesFijas };