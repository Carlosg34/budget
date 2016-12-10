var path = require('path');
var webpack = require('webpack');
var express = require('express');
var httpProxy = require("http-proxy");
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var getConfig = require('../webpack.config');

var config = getConfig({dev: true})

var app = express();
var apiProxy = httpProxy.createProxyServer();

var compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  // proxy: {
  //   '/api': {
  //     target: 'http://'
  //   }
  // },
  // only output errors to console
  stats: 'errors-only'
}));

app.use(hotMiddleware(compiler));

// Proxy api requests
app.use("/api/*", function(req, res) {
  req.url = req.baseUrl;
  apiProxy.web(req, res, {
    target: {
      port: 3001,
      host: "localhost"
    }
  });
});
//
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(3000, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
