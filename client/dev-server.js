var path = require('path');
var webpack = require('webpack');
var express = require('express');
var httpProxy = require("http-proxy");
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var getConfig = require('../webpack.config');

var config = getConfig({dev: true})

var app = express();
var apiProxy = httpProxy.createProxyServer();

var compiler = webpack(config);

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: 'errors-only'
})

app.use(devMiddleware);
app.use(webpackHotMiddleware(compiler));

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

app.get('*', function response(req, res) {
  res.write(devMiddleware.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')));
  res.end();
});


app.listen(3000, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
