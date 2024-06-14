const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://ettshopcontainer.happysea-b769e5ec.southeastasia.azurecontainerapps.io',
            changeOrigin: true,
        })
    );
};
