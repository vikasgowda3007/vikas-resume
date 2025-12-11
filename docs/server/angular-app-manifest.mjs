
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/resume-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/resume-website"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1328, hash: '4a0962ef68350dcb7b8246ca66095e052dd23a5d8dfc7ad58a13f3bea1dbd912', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 964, hash: '4dad9585a609f099d032ac1e728dbd31b95256bfe63104adc664bac1e3b345dc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22443, hash: 'd9aad224fb9fc74a57603a5af2169cebb6f7aaf4219fe10f73530d30bfb76240', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UNS5FWXG.css': {size: 1175, hash: 'yJq6Uf4JQZU', text: () => import('./assets-chunks/styles-UNS5FWXG_css.mjs').then(m => m.default)}
  },
};
