const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080', // Sử dụng localhost và cổng của backend
            changeOrigin: true,
        })
    );
};
