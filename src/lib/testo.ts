/** Markdown minimo per i testi dei passaggi: solo **grassetto** e *corsivo*. */
export function testoInline(s: string): string {
  return s
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

export function elencoClassi(classi: number[]): string {
  const nomi = classi.map((c) => `${c}ª`);
  return nomi.length === 1 ? `classe ${nomi[0]}` : `classi ${nomi.join(', ')}`;
}
