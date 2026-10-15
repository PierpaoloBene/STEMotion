# Storie: guscio, personaggi ed etichette

Componenti per le animazioni delle storie "Dietro la scoperta" (`argomenti/<materia>/<slug>/storia/`,
vedi `docs/STRUTTURA-ARGOMENTO.md`, §2c). Come gli altri componenti condivisi, sono SVG originali
nello stile del sito (guida di stile, §7).

| Componente | A cosa serve | Riferimento |
|---|---|---|
| `Storia` | Guscio dell'animazione: un `<svg>` 4:3 (`viewBox="0 0 800 600"`), le descrizioni per gli screen reader e lo stile comune | — |
| `Personaggio` | Busto stilizzato del protagonista: cambiano solo capelli, barba, baffi e veste (gli stessi campi di `ritratto` in `storia.yaml`) | origine `(0, 0)` al centro della base; largo 150, alto circa 175 (y da -175 a 0) |
| `Etichetta` | Scritta di un disegno, con una linea sottile e un pallino sull'oggetto se serve | il testo parte da `(x, y)`; `allinea` sceglie inizio, centro o fine |

`disegno.ts` ha due aiuti: `freccia(x1, y1, x2, y2)` per una freccia a punta aperta e
`arco(cx, cy, r, da, a)` per un arco di circonferenza (angoli in gradi, in senso orario da destra).

## Che cosa si vede in ogni passaggio

Ciò che compare e scompare ha l'attributo `data-passi` con l'elenco dei passaggi, da 0:
`data-passi="1 2"` entra con una dissolvenza al passaggio 1 e resta fino al 2.
Il guscio gestisce fino a 6 passaggi, il massimo per una storia.

Le classi pronte del guscio:

- `tratto`: contorno di 3 px (il riempimento lo decide la storia);
- `linea`: solo contorno, senza riempimento;
- `evidenziato`: contorno `--accento` di 4 px (guida di stile, §3);
- `data`: una data o un luogo scritti grandi, di solito in alto a sinistra (`x="40" y="90"`);
- `centrato`, `fine`: allineamento di un `<text>`.

Le etichette e le date crescono da sole quando il disegno è piccolo (telefono), per restare leggibili:
lascia loro spazio attorno.

## Colori

I colori sono i token di `src/styles/global.css`: quelli con significato fisso valgono anche qui
(l'acqua è blu acqua, il cibo ocra…). Per persone e ambienti ci sono i token "personaggi delle storie"
(capelli, vesti, oro, argento, foglie, muri…).
