// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.chloe-lw-chan.com',
  trailingSlash: 'ignore',
  redirects: {
    // Legacy Wix URLs -> new structure
    '/financial-publications': '/writing',
    '/litex-legaltech': '/projects/litex',
    '/liblit-fintech': '/projects/liblit',
    '/filmography': '/film',
  },
});
