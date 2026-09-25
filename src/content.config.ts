import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Ogni argomento vive in argomenti/<materia>/<slug>/.
// L'id di ogni voce è il percorso della cartella, es. "scienze/deglutizione".
const cartella = ({ entry }: { entry: string }) => entry.split('/').slice(0, -1).join('/');

const materie = defineCollection({
  loader: file('src/data/materie.yaml'),
  schema: z.object({
    ordine: z.number().int(),
    nome: z.string(),
    descrizione: z.string(),
    aree: z.array(z.object({ id: z.string(), nome: z.string() })).default([]),
  }),
});

const argomenti = defineCollection({
  loader: glob({ base: './argomenti', pattern: '*/*/argomento.yaml', generateId: cartella }),
  schema: z
    .object({
      titolo: z.string(),
      sottotitolo: z.string(),
      materia: reference('materie'),
      area: z.string().optional(),
      classi: z.array(z.number().int().min(1).max(3)).min(1),
      modello: z.enum(['passaggi', 'simulazione', 'confronto']),
      durata_minuti: z.number().int().positive(),
      prerequisiti: z.array(z.string()).default([]),
      obiettivi: z.array(z.string()).min(1),
      parole_chiave: z.array(z.string()).default([]),
      stato: z.enum(['bozza', 'da-revisionare', 'pubblicato']),
      revisionato_da: z.string().nullable().default(null),
      fonti: z.array(z.string()).default([]),
    })
    // Regola della guida: niente "pubblicato" senza revisione di un insegnante.
    .refine((a) => a.stato !== 'pubblicato' || Boolean(a.revisionato_da), {
      message: 'Un argomento "pubblicato" deve avere `revisionato_da` compilato.',
      path: ['revisionato_da'],
    }),
});

const passaggi = defineCollection({
  loader: glob({ base: './argomenti', pattern: '*/*/passaggi.yaml', generateId: cartella }),
  schema: z.object({
    passaggi: z
      .array(
        z.object({
          id: z.string().regex(/^[a-z0-9-]+$/, 'Usa solo lettere minuscole, numeri e trattini.'),
          fase: z.string().optional(),
          titolo: z.string(),
          breve: z.string(),
          spiegazione: z.string(),
        }),
      )
      .min(1),
  }),
});

const note = defineCollection({
  loader: glob({ base: './argomenti', pattern: '*/*/insegnante.md', generateId: cartella }),
});

export const collections = { materie, argomenti, passaggi, note };
