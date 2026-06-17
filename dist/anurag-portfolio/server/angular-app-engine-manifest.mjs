
export default {
  basePath: 'https://github.com/anuragk9/anurag-portfolio-v1',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
