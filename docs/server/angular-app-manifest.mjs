
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/vikas-resume/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/vikas-resume"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1326, hash: 'c32d990f322c382a9191d44b877fd6c9ed86a4495e0c5d7c646a680d5fb1a9b1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 962, hash: 'b88cc46b74bf2d6275f85687f96bbe75f04d65ea83396bcc2807f9c54d5810f3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22441, hash: 'ec7c10e2052b31e2cc79fa122d7c26ee62dd3a2ea67b0a57b0f65d7667d30219', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UNS5FWXG.css': {size: 1175, hash: 'yJq6Uf4JQZU', text: () => import('./assets-chunks/styles-UNS5FWXG_css.mjs').then(m => m.default)}
  },
};
