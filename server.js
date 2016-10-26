var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');

var bodyParser = require('body-parser'); // for reading POSTed form data into `req.body`
var session = require('express-session');

var isDeveloping = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 4000;
var app = express();

app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'shhhh, very secret'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (isDeveloping) {
  console.log("DEV MODE ACTIVATED");
  var compiler = webpack(config);
  var middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'public',
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  var publicPath = path.resolve(__dirname, 'public');
  // We point to our static assets
  app.use(express.static(publicPath));

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html')));
    res.end();
  });
} else {
  console.log("PROD MODE ACTIVATED");
  app.use(express.static(__dirname + '/public'));
  // app.use(express.static(__dirname + '/bower_components'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
}

app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
