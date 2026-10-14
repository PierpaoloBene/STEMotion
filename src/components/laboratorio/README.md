# Strumenti e oggetti di laboratorio

Illustrazioni SVG originali da riusare in tutti gli argomenti di fisica e chimica
(guida di stile, §7): uno stesso strumento si disegna una volta sola.

Ogni componente produce un gruppo `<g>` da mettere dentro un `<svg>`. A differenza
degli organi, ognuno ha il **suo** sistema di riferimento: l'origine è il punto
con cui di solito lo si appoggia o lo si appende, così basta un `translate` per metterlo al suo posto.

| Componente | Origine `(0, 0)` | Cosa si anima |
|---|---|---|
| `Cubo` | centro dello spigolo in basso (la base sta su `y = 0`) | — · con `occhiello` ha un anellino al centro della faccia di sopra, in `y = -1,18 × lato` |
| `Bilancia` | centro del piatto (l'oggetto ci si appoggia) | il display è lo slot: un `<text>` in `(0, 0)` |
| `Righello` | lo zero, in basso; sale verso l'alto | — |
| `Dinamometro` | l'anello in cima, da appendere | `--forza` da 0 a 1 (fondo scala): molla, indice e gancio; il carico è lo slot e pende dal gancio, a 240 sotto l'anello quando `--forza` è 0 |
| `CilindroGraduato` | centro del piede, in basso | `--livello` in mL: l'acqua sale e scende |
| `Pezzo` | cima del filo, da agganciare | — |

Il dinamometro scende di `130 × --forza` (la sua corsa). Il cilindro sale di
`altezza / portata` per ogni mL (con i valori di base, 0,6 per mL).

Il cilindro è trasparente: un oggetto disegnato **prima** del cilindro si vede dentro l'acqua.

I colori dei materiali sono i token "materiali" di `src/styles/global.css`.
Il colore aiuta, ma il nome del materiale va sempre anche scritto (guida di stile, §3).
