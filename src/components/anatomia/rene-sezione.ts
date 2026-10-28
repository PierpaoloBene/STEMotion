// Geometria del rene in sezione (ReneSezione.astro), in "unità del rene":
// centro (0, 0), alto 120, ilo verso sinistra. È la stessa forma del rene di Reni.astro.
// Sullo schermo il rene ha centro in CENTRO ed è ingrandito SCALA volte (viewBox 800 × 640).
// Le animazioni che disegnano dentro il rene (slot "interno") usano queste stesse unità;
// per passare alle coordinate dello schermo c'è `schermo()`.

export const CENTRO: [number, number] = [400, 320];
export const SCALA = 4.3;

export const schermo = ([x, y]: [number, number]): [number, number] => [
  Math.round((CENTRO[0] + x * SCALA) * 10) / 10,
  Math.round((CENTRO[1] + y * SCALA) * 10) / 10,
];

// Contorno: lo usa anche Reni.astro.
export const FORMA =
  'M-6 -60C22 -62 40 -36 40 0C40 36 22 62 -6 60C-26 58 -34 40 -30 24C-27 14 -18 10 -18 0C-18 -10 -27 -14 -30 -24C-34 -40 -26 -58 -6 -60Z';

const r = (n: number) => Math.round(n * 100) / 100;

// Le strutture interne sono disposte "a raggiera" attorno a (6, 0), su ellissi:
// base delle piramidi (27 × 50), punta delle piramidi, cioè le papille (10 × 22), bordo del seno (13 × 27).
export function punto(rx: number, ry: number, gradi: number, cx = 6): [number, number] {
  const a = (gradi * Math.PI) / 180;
  return [r(cx + rx * Math.cos(a)), r(ry * Math.sin(a))];
}
const p = (xy: [number, number]) => `${xy[0]} ${xy[1]}`;

// Direzione di ogni piramide (gradi, 0 = verso il bordo esterno, a destra).
export const PIRAMIDI = [-140, -100, -60, -20, 20, 60, 100, 140];
const MEZZA_BASE = 16;

export function piramide(t: number): string {
  const base: string[] = [];
  for (let g = t - MEZZA_BASE; g <= t + MEZZA_BASE + 0.01; g += MEZZA_BASE / 3) base.push(p(punto(27, 50, g)));
  return `M${base.join('L')}L${p(punto(12, 25.6, t + 4))}Q${p(punto(9.4, 20.6, t))} ${p(punto(12, 25.6, t - 4))}Z`;
}

// Le righe delle piramidi: i tubuli e i dotti che scendono verso la papilla.
export const striature = (t: number) =>
  [-9, -3, 3, 9].map((k) => `M${p(punto(25.6, 47.4, t + k))}L${p(punto(13.4, 28.4, t + k * 0.35))}`);

// Calici: ogni papilla versa l'urina in un calice minore; i calici minori confluiscono in tre calici maggiori.
const GIUNZIONI: Record<'su' | 'centro' | 'giu', [number, number]> = { su: [0, -13], centro: [5, 0], giu: [0, 13] };
const gruppo = (t: number) => (t < -40 ? 'su' : t > 40 ? 'giu' : 'centro');
export const CALICI_MINORI = PIRAMIDI.map((t) => {
  const [x, y] = punto(11.2, 24.2, t);
  const [gx, gy] = GIUNZIONI[gruppo(t)];
  return `M${x} ${y}L${gx} ${gy}`;
});
export const CALICI_MAGGIORI = ['M0 -13L-4 -3', 'M5 0H-4', 'M0 13L-4 3'];

// Bacinetto: l'imbuto che raccoglie l'urina dei calici maggiori e continua nell'uretere.
export const BACINETTO = 'M-2 -8C2 -8 4 -4 3 0C2 5 0 9 -4 10C-8 11 -11 10 -14 10L-15 6C-12 5 -10 3 -9 0C-8 -5 -6 -8 -2 -8Z';
// Uretere: esce dall'ilo e scende fuori dal disegno.
export const URETERE = 'M-13 8C-19 9 -23 11 -26 16C-30 24 -35 42 -37 76';
export const PUNTI_URETERE: [number, number][] = [
  [-13, 8],
  [-22, 11],
  [-28, 20],
  [-33, 36],
  [-36, 56],
  [-37, 76],
];

// Seno renale: la cavità con il grasso attorno a calici e bacinetto, aperta verso l'ilo.
function seno(): string {
  const punti: string[] = [];
  for (let g = -150; g <= 150; g += 5) punti.push(p(punto(13, 27, g, 5)));
  return `M${punti.join('L')}L-30 24C-27 14 -18 10 -18 0C-18 -10 -27 -14 -30 -24Z`;
}
export const SENO = seno();

// Vasi all'ilo: l'arteria renale (sopra) e la vena renale (sotto), che arrivano da sinistra.
export const ARTERIA = 'M-74 -15H-20';
export const VENA = 'M-74 -5H-18';

// Rami dell'arteria renale: tra le piramidi (nelle colonne), poi ad arco alla base delle piramidi,
// poi piccoli rami verso la corticale, dove ci sono i glomeruli.
const COLONNE = [-120, -80, -40, 0, 40, 80, 120];
const MOZZO = 'M-26 -15L-12 -13';
export const ARTERIE_INTERNE = [
  MOZZO,
  ...COLONNE.flatMap((t) => {
    const arco: string[] = [];
    for (let g = t - 20; g <= t + 20.01; g += 5) arco.push(p(punto(27.6, 51, g)));
    return [
      `M-12 -13L${p(punto(13, 27, t, 5))}L${p(punto(27.6, 51, t))}`,
      `M${arco.join('L')}`,
      ...[-10, 10].map((k) => `M${p(punto(27.6, 51, t + k))}L${p(punto(31.2, 55.6, t + k))}`),
    ];
  }),
];

// Glomeruli: puntini rossi nella corticale.
export const GLOMERULI: [number, number][] = [];
for (let g = -144; g <= 144; g += 6.5) GLOMERULI.push(punto(29.6, 53.2, g));
for (let g = -141; g <= 141; g += 6.5) GLOMERULI.push(punto(31.6, 56.4, g));
