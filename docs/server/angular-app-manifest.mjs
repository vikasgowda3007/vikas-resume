
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
    'index.csr.html': {size: 1326, hash: '59b31a4260aedd794a74c01a469f5e26ca2ba472478d38342e125dcc0b22ae6b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 962, hash: '5b53336465b4c0c514492dd821bd063525926bea7768bf2151ba356a03f24542', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30733, hash: 'c966a8094b08f792806eb4329b5c66f51cce2440ad10d2139888d16bc2bbfb57', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UNS5FWXG.css': {size: 1175, hash: 'yJq6Uf4JQZU', text: () => import('./assets-chunks/styles-UNS5FWXG_css.mjs').then(m => m.default)}
  },
};
