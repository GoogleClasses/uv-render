
import fetch from 'node-fetch';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default class UV {
  constructor(config) {
    this.config = config;
    this.middleware = createProxyMiddleware({
      target: 'https://example.com',
      changeOrigin: true,
      pathRewrite: { '^/': '/' },
    });
  }
}
