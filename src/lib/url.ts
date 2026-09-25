/** Costruisce un link interno tenendo conto del `base` di GitHub Pages. */
export function url(percorso = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const pulito = percorso.replace(/^\//, '');
  return `${base}/${pulito}`;
}
