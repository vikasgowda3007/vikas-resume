
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
    'index.csr.html': {size: 1326, hash: '759dcb05e6c3dadcb1cf845b33df82cddc6b6b3deac1db7967b6df78e11e651d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 962, hash: 'db430b86355e09edf7739dd7ffb039883b5343f32be9def585c34fe4611a8889', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30610, hash: '631a14dcced073e3cf70d84ac903f684f7da60fd982e0fdbabff6b72566ca45f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UNS5FWXG.css': {size: 1175, hash: 'yJq6Uf4JQZU', text: () => import('./assets-chunks/styles-UNS5FWXG_css.mjs').then(m => m.default)}
  },
};
