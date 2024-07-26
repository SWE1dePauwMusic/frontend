const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/auth/**', 
        createProxyMiddleware({ 
            target: process.env.PROXY_URL || 'http://localhost:5005',
            //If host with docker -> http://backend:5000
            //If host with local machine -> http://localhost:5000
        })
    );
};


