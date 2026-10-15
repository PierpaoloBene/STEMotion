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

// Un passaggio: stesso formato in passaggi.yaml e nelle deviazioni.
const passaggio = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, 'Usa solo lettere minuscole, numeri e trattini.'),
  fase: z.string().optional(),
  titolo: z.string(),
  breve: z.string(),
  spiegazione: z.string(),
});

const passaggi = defineCollection({
  loader: glob({ base: './argomenti', pattern: '*/*/passaggi.yaml', generateId: cartella }),
  schema: z.object({
    passaggi: z
      .array(
        passaggio.extend({
          // Slug delle deviazioni che si aprono da questo passaggio (cartelle in deviazioni/).
          deviazioni: z.array(z.string()).max(3, 'Al massimo 3 deviazioni per passaggio (guida di stile, §5).').default([]),
        }),
      )
      .min(1)
      .max(12, 'Al massimo 12 passaggi (guida di stile, §5).'),
  }),
});

// Deviazioni: processi alternativi che partono da un passaggio e si aprono in un box.
// L'id è il percorso della cartella, es. "scienze/deglutizione/deviazioni/tosse".
const deviazioni = defineCollection({
  loader: glob({ base: './argomenti', pattern: '*/*/deviazioni/*/deviazione.yaml', generateId: cartella }),
  schema: z.object({
    pulsante: z.string(),
    titolo: z.string(),
    passaggi: z.array(passaggio).min(1).max(6, 'Al massimo 6 passaggi in una deviazione (guida di stile, §5).'),
  }),
});

// Storie: chi ha scoperto o studiato l'argomento, in un box che si apre sotto il lettore.
// L'id è il percorso della cartella, es. "scienze/peso-specifico/storia".
// Il ritratto è una figura stilizzata (src/components/storie/Personaggio.astro), mai un ritratto copiato.
const ritratto = z.object({
  capelli: z.enum(['corti', 'lunghi', 'ricci', 'spettinati', 'calvo']).default('corti'),
  colore_capelli: z.enum(['neri', 'castani', 'grigi', 'bianchi']).default('castani'),
  barba: z.enum(['no', 'corta', 'lunga']).default('no'),
  baffi: z.boolean().default(false),
  veste: z.enum(['tunica', 'giacca', 'talare']).default('giacca'),
  colore_veste: z.enum(['bianco', 'nero', 'blu', 'rosso', 'verde', 'marrone']).default('blu'),
});

const storie = defineCollection({
  loader: glob({ base: './argomenti', pattern: '*/*/storia/storia.yaml', generateId: cartella }),
  schema: z.object({
    protagonista: z.string(),
    anni: z.string(),
    richiamo: z.string(),
    titolo: z.string(),
    ritratto: ritratto,
    passaggi: z.array(passaggio).min(1).max(6, 'Al massimo 6 passaggi in una storia (guida di stile, §5).'),
    fonti: z.array(z.string()).min(1, 'Una storia ha sempre almeno una fonte (guida di stile, §5).'),
  }),
});

const note = defineCollection({
  loader: glob({ base: './argomenti', pattern: '*/*/insegnante.md', generateId: cartella }),
});

export const collections = { materie, argomenti, passaggi, deviazioni, storie, note };
