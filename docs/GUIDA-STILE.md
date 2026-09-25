# Guida di stile — Animazioni ai raggi X

Questa guida vale per **ogni** argomento del sito. Chi crea un nuovo argomento (persona o Claude) la legge per intero prima di iniziare e la rispetta senza eccezioni. Se una regola non funziona per un caso concreto, si cambia la guida, non il singolo argomento.

---

## 1. Principi

1. **Un passaggio, un concetto.** Ogni passaggio mostra una sola cosa nuova. Se servono due frasi con "e poi", sono due passaggi.
2. **L'insegnante comanda il ritmo.** Nessuna animazione avanza da sola. Si passa al passaggio successivo solo con un'azione (clic, tocco, tasto).
3. **L'immagine spiega, il testo conferma.** Con il testo nascosto (modalità lezione) l'animazione deve restare comprensibile.
4. **Si può sempre tornare indietro.** Ogni passaggio è ricostruibile da zero: andare avanti e indietro dà sempre lo stesso risultato.
5. **Semplificare sì, sbagliare no.** Si può omettere un dettaglio, non si può dire una cosa falsa. Una semplificazione importante si segnala nelle note per l'insegnante.

---

## 2. Pubblico e linguaggio

- **Destinatari:** studenti di 11–14 anni (classi 1ª, 2ª, 3ª media) e i loro insegnanti.
- **Frasi brevi:** massimo ~20 parole. Una idea per frase.
- **Termini tecnici:** si usano quelli corretti (*epiglottide*, non "la valvolina"), ma la prima volta vanno in **grassetto** e spiegati subito con parole semplici.
- **Registro:**
  - testi dei passaggi → terza persona, descrittivi ("La lingua spinge il bolo verso la gola.")
  - inviti all'interazione → seconda persona singolare ("Trascina il bolo…", "Secondo te…?")
- **Niente** ironia, riferimenti a meme, emoji nei testi didattici.
- **Unità di misura** del Sistema Internazionale, con lo spazio tra numero e unità (`37 °C`, `5 m/s`).

---

## 3. Colori

Tema **chiaro** di default: sulla LIM proiettata rende molto meglio del tema scuro.

### Colori dell'interfaccia

| Ruolo | Token | Valore |
|---|---|---|
| Sfondo | `--sfondo` | `#FAFAF7` |
| Superficie (card, pannelli) | `--superficie` | `#FFFFFF` |
| Testo principale | `--testo` | `#1D1D1F` |
| Testo secondario | `--testo-2` | `#5A5A63` |
| Accento / azione principale | `--accento` | `#2F5BEA` |
| Bordo | `--bordo` | `#DDDDE3` |

### Colore per materia

Ogni materia ha un colore che la identifica in landing, intestazioni e badge. **Non** va usato dentro le animazioni per altri significati.

| Materia | Token | Valore |
|---|---|---|
| Scienze | `--scienze` | `#1F9E6E` (verde) |
| Matematica | `--matematica` | `#2F5BEA` (blu) |
| Fisica | `--fisica` | `#E07A1F` (arancio) |

### Colori con significato fisso (dentro le animazioni)

Lo stesso concetto ha **sempre** lo stesso colore, in tutto il sito:

| Significato | Valore |
|---|---|
| Sangue ricco di ossigeno / arterie | `#D7263D` (rosso) |
| Sangue povero di ossigeno / vene | `#3A5BA0` (blu) |
| Ossigeno (O₂) | `#D7263D` |
| Anidride carbonica (CO₂) | `#7A7A85` (grigio) |
| Cibo / bolo | `#C98B3F` (ocra) |
| Aria | `#8EC9F0` (azzurro) |
| Elemento evidenziato nel passaggio corrente | contorno `--accento`, 4 px |

### Accessibilità del colore

- Contrasto testo/sfondo almeno **4,5:1** (WCAG AA).
- **Mai solo il colore** per trasmettere un'informazione: sempre anche un'etichetta, una forma o un'icona (circa 1 ragazzo su 12 è daltonico).

---

## 4. Tipografia

- **Font:** [Atkinson Hyperlegible](https://brailleinstitute.org/freefont), progettato per la massima leggibilità e adatto anche a studenti con dislessia. Ospitato nel repo, non caricato da servizi esterni (il sito deve funzionare offline).
- **Dimensioni minime** (pensate per la LIM vista dal fondo dell'aula):
  - titolo argomento: 40 px
  - testo del passaggio: 24 px
  - etichette nelle animazioni: 20 px
  - testo di servizio (note, fonti): 16 px
- Allineamento a sinistra, mai giustificato. Interlinea 1,5.

---

## 5. Interfaccia di un argomento

Ogni pagina argomento ha gli **stessi controlli nella stessa posizione**:

- **◀ Indietro** · **▶ Avanti** · **↺ Ripeti passaggio**: in basso, sempre visibili.
- **Indicatore di avanzamento**: pallini, uno per passaggio, cliccabili.
- **Testo sì/no**: nasconde i testi (modalità lezione per la LIM).
- **Schermo intero.**

Regole:

- Area toccabile minima **56 × 56 px** (le LIM sono poco precise).
- Tastiera: `→` / `Spazio` avanti, `←` indietro, `R` ripeti, `T` testo, `F` schermo intero. Così funziona anche con il telecomando da presentazione.
- Funziona da **telefono in verticale** (studenti a casa) fino alla **LIM 16:9** (classe).

---

## 6. Animazioni

- **Durata di un passaggio:** tra 0,6 s e 2,5 s. Poi l'animazione si ferma nello stato finale del passaggio.
- **Cicli** (es. battito cardiaco, respiro) sono ammessi solo se aiutano a capire, e si fermano con il tasto pausa.
- **Easing morbido** (`ease-in-out`), niente rimbalzi o effetti "cartone animato" che distraggono.
- Nessun lampeggio più veloce di 3 volte al secondo.
- Rispettare `prefers-reduced-motion`: in quel caso ogni passaggio mostra direttamente lo stato finale.
- **Interazione:** quando lo studente deve fare qualcosa (trascinare, muovere un cursore), l'elemento interattivo ha un bordo tratteggiato `--accento` e un'indicazione testuale di cosa fare.

---

## 7. Illustrazioni

- **Solo SVG originali**, disegnati per il sito. Niente immagini prese da libri, siti o banche immagini.
- **Stile:** piatto e semplificato, contorni di 2–3 px, colori pieni, nessuna ombra realistica. Anatomia chiara ma non splatter.
- **Etichette** collegate all'elemento con una linea sottile, mai sovrapposte al disegno.
- **Coerenza:** uno stesso organo o oggetto si disegna una volta sola e si riusa (libreria di componenti condivisi). Il polmone della respirazione e quello della circolazione sono lo stesso disegno.

---

## 8. Privacy e tecnica

- Nessun login, nessun cookie di tracciamento, nessuna analitica che raccolga dati personali.
- Nessuna risorsa caricata da servizi esterni (font, librerie, immagini): tutto nel repo.
- Ogni animazione ha una descrizione testuale dei passaggi leggibile dagli screen reader.
