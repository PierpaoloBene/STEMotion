# Organi condivisi

Illustrazioni SVG originali da riusare in tutti gli argomenti (guida di stile, §7):
uno stesso organo si disegna una volta sola.

Ogni componente produce un gruppo `<g>` da mettere dentro un `<svg>`. Tutti usano
lo **stesso sistema di riferimento**, così si possono combinare senza spostarli:

- corpo di profilo, rivolto verso **destra** (il viso è a destra);
- unità del disegno: da `x = 180` (nuca) a `x = 645` (punta del naso),
  da `y = 60` (sommità della testa) a `y = 1120` (addome);
- riferimenti utili: palato a `y ≈ 257`, ingresso dell'esofago a `y ≈ 432`,
  cardias a `(391, 934)`, cupola del diaframma a `y ≈ 888`.

I pezzi che si muovono hanno una classe e sono disegnati attorno al proprio perno,
così l'animazione li ruota o li sposta con un semplice `transform` CSS:

| Componente | Classi animabili | Perno |
|---|---|---|
| `Corpo` | — | — |
| `Polmoni` | `.polmone` | ilo `(437, 790)` |
| `Diaframma` | `.diaframma` (solo in verticale) | — |
| `BoccaFaringe` | `.lingua`, `.palato-molle` | lingua `(545, 396)`, palato molle `(445, 257)` |
| `Laringe` | `.laringe` (tutta), `.epiglottide`, `.corda-vocale--dietro`, `.corda-vocale--davanti` | epiglottide `(452, 398)`; corde vocali sulle pareti a `y = 444` (`scaleX(1.46)` le chiude) |
| `Esofago` | — | — |
| `Stomaco` | `.cardias__sx`, `.cardias__dx` | cardias `(391, 934)` |

## Vista frontale dell'addome

Gli organi della digestione hanno un secondo sistema di riferimento, il busto **visto di fronte**:

- la persona ci guarda, quindi il suo lato **destro è a sinistra** nel disegno (fegato, cieco, appendice);
- unità del disegno: busto da `x = 228` a `x = 572`, da `y = -20` (sotto il petto) a `y = 660` (bacino);
  si usa con `viewBox="0 0 800 640"`;
- riferimenti utili: ombelico `(400, 400)`, piloro `(386, 250)`, sbocco di bile e succo pancreatico
  nel duodeno `(343, 300)`, cieco `(298, 520)`, attacco dell'appendice `(310, 538)`.
- apparato urinario: rene destro (a sinistra nel disegno) con centro `(318, 270)`, rene sinistro `(482, 252)`,
  aorta a `x = 414`, vena cava a `x = 386`, collo della vescica `(400, 622)`, fine dell'uretra `(400, 666)`.

| Componente | Classi animabili | Note |
|---|---|---|
| `AddomeFronte` | — | pelle, diaframma, arcate delle costole |
| `Fegato` | — | con cistifellea e dotto della bile |
| `Pancreas` | — | con il dotto del succo pancreatico |
| `StomacoFronte` | `.piloro__su`, `.piloro__giu` | `translateY(∓6px)` apre il piloro |
| `IntestinoTenue` | `.duodeno`, `.anse` | tubi disegnati come tratti: crescono con lo zoom |
| `IntestinoCrasso` | `.appendice`, `.appendice__corpo`, `.appendice__parete` | slot `appendice`: asse lungo y, attacco in `(0, 0)`, punta a `y = 56` |
| `AppendiceInterno` | `.tappo`, `.batteri--1/2/3`, `.vasi`, `.pus`, `.crepa` | va nello slot `appendice`; tutto parte nascosto |
| `Villi` | — | riquadro al microscopio da `(60, 30)` a `(740, 610)` |
| `VasiAddome` | `.arteria-renale`, `.vena-renale` (con `.vaso__bordo` per il contorno) | aorta, vena cava, vasi dei reni e delle gambe |
| `Reni` | `.rene__urina`, `.uretere__urina` | reni in sezione con il bacinetto e gli ureteri; l'urina parte nascosta (`opacity: 0`), negli ureteri è un tratteggio da far scorrere con `stroke-dashoffset` (`pathLength="100"`) |
| `Vescica` | `.vescica`, `.vescica__urina`, `.sfintere__sx`, `.sfintere__dx`, `.uretra__urina` | `.vescica` si gonfia con `scale` attorno al collo (vuota `0.62`, piena `1`); `.vescica__urina` sale con `translateY` (`92px` vuota, `0` piena); `translateX(∓5px)` apre lo sfintere |
| `Nefrone` | `.nefrone__urina` | schema al microscopio da `(60, 30)` a `(740, 610)`: glomerulo `(222, 160)`, tubulo fino al dotto a `x = 680`, capillari rossi a `y = 330` e blu a `y = 430` |

Ordine consigliato: `AddomeFronte`, `Pancreas`, `Fegato`, `IntestinoTenue`, `StomacoFronte`, `IntestinoCrasso`.
Per l'apparato urinario: `AddomeFronte`, `VasiAddome`, `Reni`, `Vescica` (gli organi della digestione, che stanno davanti, si lasciano fuori).

## Vista di profilo

Ordine consigliato: `Corpo`, `Polmoni`, `Diaframma`, `BoccaFaringe`, `Esofago`, `Laringe`, `Stomaco`.
I colori sono i token "Illustrazioni" di `src/styles/global.css`.
