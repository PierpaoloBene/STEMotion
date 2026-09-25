# Animazioni ai raggi X

Animazioni interattive per le scuole medie: scienze e matematica viste "ai raggi X", un passo alla volta.
Pensato per l'insegnante che spiega sulla LIM e per lo studente che ripassa a casa.

## Avviare il sito in locale

Serve Node.js 22 o più recente.

```bash
npm install
npm run dev
```

Poi apri http://localhost:4321/animazioni-ai-raggi-x/

## Come è organizzato

```
argomenti/<materia>/<argomento>/   un argomento = una cartella (vedi docs/STRUTTURA-ARGOMENTO.md)
src/data/materie.yaml              elenco delle materie e delle loro sottomaterie (aree)
src/components/Lettore.astro       il lettore a passaggi comune a tutti gli argomenti
src/pages/                         landing, pagina materia, pagina argomento
docs/                              guida di stile e struttura di un argomento
```

## Aggiungere un argomento

1. Leggi `docs/GUIDA-STILE.md` e `docs/STRUTTURA-ARGOMENTO.md`.
2. Crea `argomenti/<materia>/<nome-argomento>/` con `argomento.yaml`, `passaggi.yaml`, `insegnante.md`.
3. Aggiungi `Animazione.astro` (finché manca, compare un segnaposto).
4. `npm run build` controlla che i file siano compilati correttamente.

Un argomento resta in bozza finché un insegnante non ne ha verificato i contenuti.

## Licenza

Codice sotto licenza MIT (vedi `LICENSE`).
