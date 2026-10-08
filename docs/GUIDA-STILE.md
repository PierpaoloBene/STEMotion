# Guida di stile — STEMotion

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

- **Destinatari:** studenti di 11–14 anni (scuola media) e i loro insegnanti.
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

Ogni materia ha un colore che la identifica in landing, intestazioni e badge. **Non** va usato dentro le animazioni per altri significati. Le sottomaterie (per esempio fisica o anatomia dentro scienze) usano il colore della loro materia.

| Materia | Token | Valore |
|---|---|---|
| Scienze | `--scienze` | `#1F9E6E` (verde) |
| Matematica | `--matematica` | `#2F5BEA` (blu) |

Il colore base di scienze **non** ha abbastanza contrasto per scriverci sopra in bianco (3,4:1). Per questo ogni materia ha due varianti:

| Materia | Scuro: testo bianco sopra, testo colorato su sfondo chiaro | Tinta: sfondo di sezioni e pannelli |
|---|---|---|
| Scienze | `--scienze-scuro` `#177A55` | `--scienze-tinta` `#E3F4EC` |
| Matematica | `--matematica-scuro` `#2F5BEA` | `--matematica-tinta` `#E8EEFD` |

Il colore base resta per bordi, icone e decorazioni; per testi e pulsanti pieni si usa lo scuro.

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
| Acqua in ogni stato (ghiaccio, liquida, vapore) e sue molecole | `#2C9AD1` (blu acqua) |
| Calore (fornello, fiamma, piastra accesa) | `#F26B1D` (arancione) |
| Sostanze nutritive (molecole del cibo digerito) | `#8E5BB5` (viola), pallini |
| Succhi digestivi (succo gastrico, bile, succo pancreatico) | `#A3C639` (verde lime), gocce |
| Batteri | `#5E7A2A` (verde oliva), bastoncini |
| Elemento evidenziato nel passaggio corrente | contorno `--accento`, 4 px |

In matematica i colori indicano il **ruolo** di un elemento. Le tinte sono poche e si ripetono tra aree diverse (gli insiemi numerici non compaiono mai nello stesso disegno della circonferenza), ma dentro un disegno ogni tinta ha un solo significato.

| Significato (matematica) | Token | Valore |
|---|---|---|
| Numeri naturali, insieme N | `--naturali` | `#B88400` (oro) |
| Numeri interi relativi, insieme Z | `--interi` | `#C2367A` (magenta) |
| Numeri razionali, insieme Q | `--razionali` | `#12827C` (verde petrolio) |
| Numeri reali e irrazionali, insieme R | `--reali` | `#5B4B9A` (indaco) |
| Raggio | `--geo-raggio` | `#C2367A` (magenta) |
| Diametro | `--geo-diametro` | `#12827C` (verde petrolio) |
| Corda | `--geo-corda` | `#B4532A` (terracotta) |
| Arco minore | `--geo-arco-minore` | `#5B4B9A` (indaco) |
| Arco maggiore | `--geo-arco-maggiore` | `#B88400` (oro) |

Circonferenza, assi e retta dei numeri si disegnano con il colore del contorno (`--testo`); la superficie del cerchio con `--bordo`.

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

Il lettore funziona come le "storie" dei social che gli studenti usano ogni giorno: contenuto a tutto schermo, un tocco per andare avanti, barre di avanzamento in alto. Resta però sempre chi guarda a decidere il ritmo (principio 2): niente avanza da solo.

Ogni pagina argomento ha gli **stessi controlli nella stessa posizione**:

- **Barre di avanzamento** in alto: una per passaggio, piene fino a quello corrente. Si toccano per saltare a un passaggio.
- **◀ Indietro** · **▶ Avanti** · **↺ Ripeti passaggio**: in basso, sempre visibili, a portata di pollice.
- **Testo sì/no**: nasconde le spiegazioni (modalità lezione per la LIM).
- **Schermo intero.**

**Tocchi sul palco.** Nel modello `passaggi` si può toccare l'animazione: il terzo sinistro torna indietro, il resto va avanti. Anche scorrere il dito a destra o a sinistra cambia passaggio. Negli altri modelli (`simulazione`, `confronto`) il palco non reagisce ai tocchi, per non disturbare cursori e trascinamenti.

**Telefono (schermo stretto).** La pagina mostra titolo, informazioni e un'anteprima dell'animazione con il pulsante **Inizia**. Da lì il lettore occupa tutto lo schermo: barre in alto, animazione, pannello del testo, comandi in basso. **✕ Chiudi**, il tasto `Esc` e il tasto "indietro" del telefono tornano alla pagina. Nel pannello del testo si vedono sempre titolo e frase `breve`; la `spiegazione` si apre con **Leggi la spiegazione**, così l'animazione resta grande.

**Schermata finale.** Dopo l'ultimo passaggio, **Avanti** apre una schermata di chiusura con:

- il riepilogo dei passaggi (titolo e frase breve; ognuno riporta al suo passaggio);
- **Rivedi dall'inizio**;
- **Condividi**: usa la condivisione del telefono o, se non c'è, copia il link;
- il **prossimo argomento** da vedere, oppure il ritorno alla materia. Non si apre mai da solo.

**Deviazioni.** A volte un processo può prendere un'altra strada: il cibo va di traverso, un boccone è troppo grande. Queste alternative non sono passaggi della sequenza, perché non vengono "dopo": sono **deviazioni** che partono da un passaggio preciso.

- Nel passaggio da cui partono, sotto la frase `breve`, compare un riquadro tratteggiato "E se qualcosa va storto?" con un pulsante per ogni deviazione. Resta visibile anche con il testo nascosto.
- Il pulsante scurisce la pagina e apre sopra un **box** con un lettore ridotto: barre, **◀ Indietro** · **▶ Avanti** · **↺ Ripeti** · **Testo sì/no** e **✕ Chiudi**. Niente schermata finale e niente schermo intero (il box si apre anche sopra lo schermo intero). Sul telefono il box occupa tutto lo schermo.
- Il box riparte sempre dal primo passaggio. All'ultimo, **Avanti** diventa "Torna a …" (es. "Torna alla deglutizione") e chiude il box. Si chiude anche con ✕ o `Esc`. Come il resto, non si apre né si chiude da solo.
- Chiuso il box, si è di nuovo nel passaggio da cui si era partiti.
- Al massimo **3 deviazioni** per passaggio e **6 passaggi** per deviazione: è una parentesi, non un secondo argomento.

Regole:

- Area toccabile minima **56 × 56 px** (le LIM sono poco precise) per tutti i comandi. Unica eccezione ammessa: le barre di avanzamento, che sono una scorciatoia. Sono alte 56 px e si dividono la larghezza. Per questo un argomento non supera **12 passaggi**.
- Tastiera: `→` / `Spazio` avanti, `←` indietro, `R` ripeti, `T` testo, `F` schermo intero, `Esc` chiude il lettore a tutto schermo del telefono o il box di una deviazione. Così funziona anche con il telecomando da presentazione.
- Funziona da **telefono in verticale** (studenti a casa) fino alla **LIM 16:9** (classe).
- Cosa **non** si prende dai social: avanzamento o riproduzione automatica, scorrimento infinito, like e contatori, notifiche, serie di giorni consecutivi. Creano dipendenza e richiederebbero di raccogliere dati.

---

## 6. Animazioni

- **Durata di un passaggio:** tra 0,6 s e 2,5 s. Poi l'animazione si ferma nello stato finale del passaggio.
- **Cicli** (es. battito cardiaco, respiro) sono ammessi solo se aiutano a capire, e si fermano con il tasto pausa.
- **Easing morbido** (`ease-in-out`), niente rimbalzi o effetti "cartone animato" che distraggono.
- Nessun lampeggio più veloce di 3 volte al secondo.
- Rispettare `prefers-reduced-motion`: in quel caso ogni passaggio mostra direttamente lo stato finale.
- **Interazione:** quando lo studente deve fare qualcosa (trascinare, muovere un cursore), l'elemento interattivo ha un bordo tratteggiato `--accento` e un'indicazione testuale di cosa fare. Nel codice ha l'attributo `data-interattivo`, così i tocchi su di lui non cambiano passaggio.

---

## 7. Illustrazioni

- **Solo SVG originali**, disegnati per il sito. Niente immagini prese da libri, siti o banche immagini.
- **Stile:** piatto e semplificato, contorni di 2–3 px, colori pieni, nessuna ombra realistica. Anatomia chiara ma non splatter.
  È lo stile scelto per tutto il sito dopo aver provato alternative (atlante sfumato, disegno a mano, radiografia a colori, 3D): resta leggibile sulla LIM, pesa poco e funziona su ogni dispositivo. Per cambiarlo si aggiorna questa guida, non un singolo argomento.
- **Etichette** collegate all'elemento con una linea sottile, mai sovrapposte al disegno.
- **Coerenza:** uno stesso organo o oggetto si disegna una volta sola e si riusa (libreria di componenti condivisi in `src/components/anatomia/`). Il polmone della respirazione e quello della circolazione sono lo stesso disegno.
- **Due viste del corpo:** di profilo (testa, collo, torace: deglutizione, respirazione) e di fronte (addome: digestione, appendicite). Nella vista di fronte la persona ci guarda, quindi il suo lato destro è a sinistra nel disegno: quando conta (es. "dolore in basso a destra"), il testo lo dice.

---

## 8. Privacy e tecnica

- Nessun login, nessun cookie di tracciamento, nessuna analitica che raccolga dati personali.
- Nessuna risorsa caricata da servizi esterni (font, librerie, immagini): tutto nel repo.
- Ogni animazione ha una descrizione testuale dei passaggi leggibile dagli screen reader.

---

## 9. Identità visiva

Il sito deve piacere a ragazzi abituati ai social senza perdere leggibilità sulla LIM. Le regole dei paragrafi 3 e 4 restano valide; questa sezione dice come usarle.

- **Forme morbide.** Card e lettore con angoli di 24 px (`--raggio`); pulsanti e etichette a pillola (angoli completamente arrotondati); pulsanti con sola icona rotondi.
- **Profondità leggera.** Le card e il lettore hanno un'ombra morbida (`--ombra`), che si alza al passaggio del mouse (`--ombra-alta`). Le ombre sono **solo nell'interfaccia**: nelle illustrazioni restano vietate (§7).
- **Colore a blocchi.** Le pagine di una materia e dei suoi argomenti hanno in cima una fascia con la **tinta** della materia. Il colore della materia compare anche come pallino nella navigazione e come anello nelle "bolle" delle materie in home. Sulle tinte il testo resta `--testo`; testo colorato solo con la variante scura.
- **Navigazione.** In testata, oltre al marchio, le materie come pulsanti a pillola sempre raggiungibili. Niente briciole di pane: la fascia della pagina ha un link per tornare alla materia.
- **Testi dell'interfaccia.** Seconda persona, brevi e diretti ("Inizia", "Continua da dove eri", "Vedi tutti"). Niente emoji, neanche nell'interfaccia: le icone sono SVG originali.

### Copertine ed effetto raggi X

Ogni argomento ha una **copertina** (formato 4:5, come un post) che mostra l'oggetto **da fuori**. Al passaggio del mouse o quando la card riceve il focus, una linea di scansione scende e rivela la **radiografia**: lo stesso oggetto visto **da dentro**, su fondo scuro. È il segno di riconoscimento del sito.

- La scansione dura 1,2 s, `ease-in-out`, avviene una volta sola e si inverte quando il mouse esce. Nessun ciclo.
- Sugli schermi senza mouse (telefono, tablet, LIM) la copertina mostra subito la radiografia: lì il passaggio del mouse non esiste.
- Con `prefers-reduced-motion` la radiografia compare senza movimento.
- Nella radiografia valgono i colori con significato fisso (§3): il cibo è ocra, l'aria azzurra, e così via.
- Niente testo dentro la copertina: il titolo sta nella card.

### Memoria nel browser

Per dare continuità senza account, il sito ricorda **solo nel browser** (`localStorage`) quali argomenti sono stati visti fino alla fine e a che passaggio ci si è fermati. Serve per la spunta **Visto** sulle card (sempre icona **e** testo) e per **Continua da dove eri** in home. Nessun dato lascia il dispositivo; se il browser non lo permette, il sito funziona lo stesso.
