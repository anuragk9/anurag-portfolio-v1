
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1032, hash: '4b382f53fe50eb2f828285dfe0e59da94bc3130b23b2bcbf2e60950a638b539f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1181, hash: '08f4adb69a4daa2446157b645944f445e9a7a13d060e419d1d0ce77e29de1a91', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18504, hash: '52999b9693cee859f8918fdf11b7ea32ab91c8105216988dd957a1010b27c76c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IJDBG2DT.css': {size: 420, hash: 'NI7zfbFl6eo', text: () => import('./assets-chunks/styles-IJDBG2DT_css.mjs').then(m => m.default)}
  },
};
