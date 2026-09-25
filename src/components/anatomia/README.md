# Organi condivisi

Illustrazioni SVG originali da riusare in tutti gli argomenti (guida di stile, §7):
uno stesso organo si disegna una volta sola.

Ogni componente produce un gruppo `<g>` da mettere dentro un `<svg>`. Tutti usano
lo **stesso sistema di riferimento**, così si possono combinare senza spostarli:

- corpo di profilo, rivolto verso **destra** (il viso è a destra);
- unità del disegno: da `x = 180` (nuca) a `x = 645` (punta del naso),
  da `y = 60` (sommità della testa) a `y = 1120` (addome);
- riferimenti utili: palato a `y ≈ 257`, ingresso dell'esofago a `y ≈ 432`,
  cardias a `(391, 934)`.

I pezzi che si muovono hanno una classe e sono disegnati attorno al proprio perno,
così l'animazione li ruota o li sposta con un semplice `transform` CSS:

| Componente | Classi animabili | Perno |
|---|---|---|
| `Corpo` | — | — |
| `BoccaFaringe` | `.lingua`, `.palato-molle` | lingua `(545, 396)`, palato molle `(445, 257)` |
| `Laringe` | `.laringe` (tutta), `.epiglottide` | epiglottide `(452, 398)` |
| `Esofago` | — | — |
| `Stomaco` | `.cardias__sx`, `.cardias__dx` | cardias `(391, 934)` |

Ordine consigliato: `Corpo`, `BoccaFaringe`, `Esofago`, `Laringe`, `Stomaco`.
I colori sono i token "Illustrazioni" di `src/styles/global.css`.
