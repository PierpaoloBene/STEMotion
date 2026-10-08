# Struttura di un argomento

Ogni argomento è una cartella con sempre gli stessi file. Chi crea un argomento parte da qui e segue anche la [Guida di stile](GUIDA-STILE.md).

```
argomenti/
└── scienze/
    └── deglutizione/
        ├── argomento.yaml      # scheda: titolo, materia, obiettivi
        ├── passaggi.yaml       # la spiegazione, passo per passo
        ├── insegnante.md       # note didattiche per l'insegnante
        ├── copertina.svg       # la copertina "ai raggi X" per le card
        ├── Animazione.astro    # l'animazione interattiva
        └── deviazioni/         # facoltativa: processi alternativi aperti in un box
            └── tosse/
                ├── deviazione.yaml
                └── Animazione.astro
```

---

## 1. `argomento.yaml` — la scheda

```yaml
titolo: La deglutizione
sottotitolo: Come il cibo passa dalla bocca allo stomaco
materia: scienze
area: anatomia                 # sottomateria, una di quelle in src/data/materie.yaml
modello: passaggi              # passaggi | simulazione | confronto
durata_minuti: 10              # tempo indicativo in classe
prerequisiti: []               # slug di altri argomenti, es. [apparato-digerente]
obiettivi:
  - Descrivere le tre fasi della deglutizione
  - Spiegare perché il cibo non va nelle vie respiratorie
parole_chiave: [bolo, faringe, epiglottide, esofago, peristalsi]
stato: bozza                   # bozza | da-revisionare | pubblicato
revisionato_da: null           # nome dell'insegnante che ha verificato i contenuti
fonti:
  - "Libro di testo o fonte affidabile usata per verificare i contenuti"
```

**Modelli di animazione:**

- **passaggi**: un processo in sequenza (deglutizione, respirazione, fecondazione, ciclo dell'acqua).
- **simulazione**: lo studente cambia un valore e vede l'effetto (piano inclinato, densità, funzioni).
- **confronto**: due situazioni affiancate (inspirazione/espirazione, cellula animale/vegetale).

---

## 2. `passaggi.yaml` — la spiegazione

Ogni passaggio ha due livelli di testo:

- `breve`: una riga, visibile anche sulla LIM. Massimo ~12 parole.
- `spiegazione`: 2–4 frasi per lo studente che studia da solo. Nascosta in modalità lezione.

```yaml
passaggi:
  - id: masticazione
    fase: orale
    titolo: Il bolo
    breve: Denti e saliva trasformano il cibo in bolo.
    spiegazione: >
      I denti sminuzzano il cibo e la saliva lo inumidisce.
      Si forma una pallina morbida chiamata **bolo**, facile da inghiottire.
      Questa fase è **volontaria**: decidiamo noi quando deglutire.

  - id: spinta-lingua
    fase: orale
    titolo: La spinta della lingua
    breve: La lingua spinge il bolo verso la faringe.
    spiegazione: >
      La lingua si solleva contro il palato e spinge il bolo all'indietro,
      verso la **faringe**, il tratto in cui si incrociano la via del cibo
      e quella dell'aria.

  - id: chiusura-vie-aeree
    fase: faringea
    titolo: Le vie dell'aria si chiudono
    breve: L'epiglottide chiude la laringe, il palato chiude il naso.
    spiegazione: >
      Da qui tutto avviene in automatico, con un **riflesso**.
      Il palato molle si alza e chiude il passaggio verso il naso.
      La laringe si solleva e l'**epiglottide** si abbassa come un coperchio.
      Per un istante il respiro si ferma: il bolo non può finire nei polmoni.

  - id: ingresso-esofago
    fase: faringea
    titolo: Il bolo entra nell'esofago
    breve: Il bolo scivola nell'esofago.
    spiegazione: >
      L'ingresso dell'**esofago** si apre e il bolo ci entra.
      Subito dopo l'epiglottide si rialza e si torna a respirare.

  - id: peristalsi
    fase: esofagea
    titolo: La peristalsi
    breve: Onde di contrazione spingono il bolo verso lo stomaco.
    spiegazione: >
      I muscoli dell'esofago si contraggono uno dopo l'altro, come un'onda.
      Questo movimento si chiama **peristalsi** e spinge il bolo in basso.
      Funziona anche a testa in giù: non è la gravità a far scendere il cibo.

  - id: stomaco
    fase: esofagea
    titolo: Nello stomaco
    breve: Il cardias si apre e il bolo entra nello stomaco.
    spiegazione: >
      In fondo all'esofago c'è un anello di muscolo, il **cardias**.
      Si apre per far passare il bolo e poi si richiude,
      così il contenuto dello stomaco non risale.
```

Per ogni passaggio l'animazione deve mostrare **esattamente** ciò che dice il testo, niente di più.

Un passaggio può aprire delle **deviazioni** (guida di stile, §5) elencandone gli slug, cioè i nomi delle cartelle in `deviazioni/`:

```yaml
  - id: chiusura-vie-aeree
    # … titolo, breve, spiegazione …
    deviazioni: [tosse, riflesso-faringeo]
```

---

## 2b. `deviazioni/<slug>/` — le deviazioni (facoltative)

Ogni deviazione è una cartella con due file.

`deviazione.yaml`: il testo del pulsante, il titolo del box e i passaggi, nello stesso formato di `passaggi.yaml` (massimo 6).

```yaml
pulsante: Tosse
titolo: La tosse
passaggi:
  - id: di-traverso
    titolo: Il cibo va di traverso
    breve: Se parli mentre deglutisci, un pezzetto di cibo entra nella laringe.
    spiegazione: >
      …
```

`Animazione.astro`: funziona come quella dell'argomento (§4), con gli stessi attributi `data-passaggio` e `data-indice` sul suo palco. Gli `id` dei passaggi devono essere diversi da quelli dell'argomento, e la classe principale dell'animazione diversa dalle altre della pagina: le animazioni del box e dell'argomento stanno nella stessa pagina.
Conviene che il primo passaggio parta dallo stato del passaggio da cui si apre il box: così la deviazione sembra il seguito di quel momento. Le note per l'insegnante restano in `insegnante.md` dell'argomento.

Se un passaggio cita una deviazione che non esiste, `npm run build` si ferma con un errore.

---

## 3. `insegnante.md` — note didattiche

Sezioni fisse, anche brevi:

```markdown
## Misconcezioni comuni
- Il cibo scende nell'esofago per gravità. → No: la peristalsi funziona anche a testa in giù (gli astronauti mangiano normalmente).

## Domande da fare alla classe
- Perché a volte il cibo "va di traverso"?
- Si può deglutire mentre si parla?

## Semplificazioni fatte
- Non mostriamo lo sfintere esofageo superiore come struttura separata.

## Collegamenti
- Prima: apparato digerente (panoramica)
- Dopo: la digestione nello stomaco
```

---

## 4. `Animazione.astro` — l'animazione

È l'unico file con codice. Finché manca, al suo posto il sito mostra un segnaposto con il titolo del passaggio.

**Come riceve il passaggio corrente.** Il lettore mette l'animazione dentro un contenitore che ha sempre:

- `data-passaggio="<id>"`: l'`id` del passaggio corrente, preso da `passaggi.yaml`;
- `data-indice="<n>"`: la sua posizione, da 0.

Il modo preferito è disegnare ogni stato **solo con CSS**, a partire da questi attributi:

```css
[data-passaggio='chiusura-vie-aeree'] .epiglottide {
  transform: rotate(35deg);
  transition: transform 1.2s ease-in-out;
}
```

Se serve JavaScript (simulazioni, trascinamenti), a ogni cambio il contenitore emette l'evento `cambiapassaggio` con `detail = { indice, id, precedente, ripeti }`.

Regole tecniche:

- Nel modello `passaggi` un tocco sul palco cambia passaggio (vedi guida di stile, §5). Gli elementi che lo studente deve toccare o trascinare hanno l'attributo `data-interattivo`. Anche `button`, `a`, `input` e `select` sono esclusi in automatico.
- Lo stato dipende **solo dal passaggio corrente**. Nessuno stato nascosto: dal passaggio 5 si può tornare al 2 e il risultato è identico ad arrivarci dall'inizio.
- Anima la **transizione** verso lo stato del passaggio, poi si ferma.
- Il pulsante "Ripeti" riporta per un istante il contenitore al passaggio precedente senza transizioni e poi torna a quello corrente: con le transizioni CSS funziona da solo.
- Riempie il contenitore (`width: 100%; height: 100%`) e si adatta sia al 16:10 della LIM sia al 4:3 del telefono.
- Usa i componenti SVG condivisi (organi, oggetti) invece di ridisegnarli: `src/components/anatomia/README.md` spiega le due viste del corpo, i perni dei pezzi che si muovono e gli slot (es. il contenuto dell'appendice).
- Nessuna libreria esterna caricata da internet.

---

## 5. `copertina.svg` — la copertina

Mostra l'oggetto da fuori e, con l'effetto raggi X, da dentro (guida di stile, §9). Finché manca, la card mostra l'icona della materia.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
  <g class="fuori"><!-- l'oggetto visto da fuori, su sfondo trasparente --></g>
  <g class="dentro"><!-- la radiografia: fondo scuro a tutta copertina, poi l'interno --></g>
</svg>
```

- `viewBox="0 0 400 500"`, senza `width` e `height`: si adatta alla card.
- Due soli gruppi di primo livello, `fuori` e `dentro`. Il sito rivela `dentro` sopra `fuori` con la scansione.
- Lo sfondo di `fuori` è trasparente: sotto c'è la tinta della materia. `dentro` ha un rettangolo `#16233F` a tutta copertina.
- Stesso stile delle illustrazioni (§7): piatto, contorni 2–3 px, niente testo, niente ombre.

---

## Checklist prima della pubblicazione

- [ ] `npm run build` termina senza errori (i file YAML vengono controllati automaticamente)
- [ ] `argomento.yaml` compilato, `stato: da-revisionare`
- [ ] Ogni passaggio ha `breve` e `spiegazione`, e l'animazione li rispecchia
- [ ] Al massimo 12 passaggi (e al massimo 6 per ogni deviazione)
- [ ] `copertina.svg` con i gruppi `fuori` e `dentro`
- [ ] Con il testo nascosto l'animazione si capisce ancora
- [ ] Avanti/indietro/salto a un passaggio danno sempre lo stesso risultato
- [ ] Provata su telefono in verticale e a schermo intero 16:9
- [ ] Colori e font rispettano la guida di stile
- [ ] **Contenuti verificati da un insegnante** → `revisionato_da` compilato, `stato: pubblicato`
