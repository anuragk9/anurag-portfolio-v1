
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/anurag-portfolio-v1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/anurag-portfolio-v1"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1500, hash: 'ae6a95e61425cc44809510246153ae4bc072aa64be68161a04473f6f49a9d158', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1201, hash: '2a6c6f015c0761657d019bb72190daaa86af7f1b1d7014772ecd098bac6dd518', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20346, hash: '34b9afde69db42d211eab57c4c4265feb3fd07cb5defb3a59beea09d0dcf1fc0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DTSMR2ZO.css': {size: 867, hash: '86HZwhm2Csc', text: () => import('./assets-chunks/styles-DTSMR2ZO_css.mjs').then(m => m.default)}
  },
};
