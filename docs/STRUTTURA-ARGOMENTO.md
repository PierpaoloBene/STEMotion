# Struttura di un argomento

Ogni argomento è una cartella con sempre gli stessi file. Chi crea un argomento parte da qui e segue anche la [Guida di stile](GUIDA-STILE.md).

```
argomenti/
└── scienze/
    └── deglutizione/
        ├── argomento.yaml      # scheda: chi, cosa, per quale classe
        ├── passaggi.yaml       # la spiegazione, passo per passo
        ├── quiz.yaml           # verifica per lo studente a casa
        ├── insegnante.md       # note didattiche per l'insegnante
        └── Animazione.astro    # l'animazione interattiva
```

---

## 1. `argomento.yaml` — la scheda

```yaml
titolo: La deglutizione
sottotitolo: Come il cibo passa dalla bocca allo stomaco
materia: scienze
area: anatomia                 # anatomia, chimica, biologia, ... (per le scienze)
classi: [2]                    # classi della media in cui si affronta di solito
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

---

## 3. `quiz.yaml` — la verifica

3–5 domande a scelta multipla. Ogni risposta ha una spiegazione, anche quelle sbagliate: sbagliare deve insegnare qualcosa.

```yaml
domande:
  - domanda: Che cosa impedisce al cibo di entrare nella laringe?
    opzioni:
      - testo: L'epiglottide
        corretta: true
        spiegazione: Esatto! Si abbassa come un coperchio sulla laringe.
      - testo: La lingua
        spiegazione: La lingua spinge il bolo, ma non chiude le vie dell'aria.
      - testo: Il cardias
        spiegazione: Il cardias è in fondo all'esofago, all'ingresso dello stomaco.
      - testo: La gravità
        spiegazione: La gravità non chiude niente: serve una "porta" fatta di tessuto.
```

Almeno una domanda deve toccare la **misconcezione più comune** dell'argomento (vedi note per l'insegnante).

---

## 4. `insegnante.md` — note didattiche

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

## 5. `Animazione.astro` — l'animazione

Regole tecniche:

- Riceve come input **solo il numero del passaggio corrente** e disegna lo stato di quel passaggio. Nessuno stato nascosto: dal passaggio 5 si può tornare al 2 e il risultato è identico ad arrivarci dall'inizio.
- Anima la **transizione** verso lo stato del passaggio, poi si ferma.
- Usa i componenti SVG condivisi (organi, oggetti) invece di ridisegnarli.
- Nessuna libreria esterna caricata da internet.

---

## Checklist prima della pubblicazione

- [ ] `argomento.yaml` compilato, `stato: da-revisionare`
- [ ] Ogni passaggio ha `breve` e `spiegazione`, e l'animazione li rispecchia
- [ ] Con il testo nascosto l'animazione si capisce ancora
- [ ] Avanti/indietro/salto a un passaggio danno sempre lo stesso risultato
- [ ] Provata su telefono in verticale e a schermo intero 16:9
- [ ] Colori e font rispettano la guida di stile
- [ ] Quiz con almeno una domanda sulla misconcezione principale
- [ ] **Contenuti verificati da un insegnante** → `revisionato_da` compilato, `stato: pubblicato`
