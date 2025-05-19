
export default {
  prefix: '/service/',
  bare: 'https://bare.pages.dev/',
  encodeUrl: true,
  handler: {
    proxy: {
      upstream: '',
      injectRequest: [],
      injectResponse: [],
    },
    cookie: {},
    request: {},
    response: {},
  },
  injector: {
    enable: true,
  },
  rewrites: {
    '^/uv/(.*)$': '/uv/$1',
  },
};
