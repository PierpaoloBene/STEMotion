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

/** "La deglutizione" → "Torna alla deglutizione": il testo di Avanti alla fine di un box. */
export function tornaA(titolo: string): string {
  const preposizioni: [RegExp, string][] = [
    [/^La /, 'alla '],
    [/^Il /, 'al '],
    [/^Lo /, 'allo '],
    [/^L['’]/, "all'"],
    [/^I /, 'ai '],
    [/^Gli /, 'agli '],
    [/^Le /, 'alle '],
  ];
  for (const [articolo, preposizione] of preposizioni) {
    if (articolo.test(titolo)) return `Torna ${titolo.replace(articolo, preposizione)}`;
  }
  return `Torna a: ${titolo}`;
}
