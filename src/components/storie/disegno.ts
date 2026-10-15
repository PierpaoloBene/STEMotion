/** Piccoli aiuti per disegnare le storie in SVG. */

const r = (v: number) => +v.toFixed(1);

/** Freccia da (x1, y1) a (x2, y2): un tratto con la punta aperta, da disegnare con la classe "linea". */
export function freccia(x1: number, y1: number, x2: number, y2: number, punta = 14): string {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const p = (d: number) => `${r(x2 - punta * Math.cos(a + d))} ${r(y2 - punta * Math.sin(a + d))}`;
  return `M${x1} ${y1}L${x2} ${y2}M${p(0.5)}L${x2} ${y2}L${p(-0.5)}`;
}

/** Arco di circonferenza di centro (cx, cy) e raggio rr, da un angolo all'altro (in gradi, 0 = destra, in senso orario). */
export function arco(cx: number, cy: number, rr: number, da: number, a: number): string {
  const punto = (g: number) => `${r(cx + rr * Math.cos((g * Math.PI) / 180))} ${r(cy + rr * Math.sin((g * Math.PI) / 180))}`;
  const grande = Math.abs(a - da) > 180 ? 1 : 0;
  return `M${punto(da)}A${rr} ${rr} 0 ${grande} ${a > da ? 1 : 0} ${punto(a)}`;
}
