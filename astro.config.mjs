// @ts-check
import { defineConfig } from 'astro/config';

// Il sito sarà pubblicato su GitHub Pages all'indirizzo
// https://pierpaolobene.github.io/animazioni-ai-raggi-x/
// Se un giorno si passa a un dominio proprio, basta cambiare `site` e togliere `base`.
export default defineConfig({
  site: 'https://pierpaolobene.github.io',
  base: '/animazioni-ai-raggi-x',
  trailingSlash: 'always',
});
