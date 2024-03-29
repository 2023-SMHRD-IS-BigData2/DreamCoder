const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/Sol',
    createProxyMiddleware({
      target: 'http://localhost:8090',
      changeOrigin: true,
    })
  );
}