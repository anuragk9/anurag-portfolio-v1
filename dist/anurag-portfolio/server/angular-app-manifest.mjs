
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/anuragk9/anurag-portfolio-v1',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/anuragk9/anurag-portfolio-v1"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1526, hash: 'f004b293f0f3dd82c754db9636807c6c99544fb4b508da8e2a0298d33a1d731f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1227, hash: '47b27be2bb3555dcf2e7992327f3d152e62c5c880e243d40e2ec46addb1459b5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20372, hash: 'e79f4e47042e9f4918b8bd22f9457e12178368acfa7dfb1966f9a522ebae5dfb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DTSMR2ZO.css': {size: 867, hash: '86HZwhm2Csc', text: () => import('./assets-chunks/styles-DTSMR2ZO_css.mjs').then(m => m.default)}
  },
};
