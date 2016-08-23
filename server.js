/**
 * Created by increment on 06.08.16.
 */
var webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	config = require('./webpack.config'),
	route = require('./route'),
	bodyParser = require('body-parser'),
	configServer = require('./config');

var app = new (require('express'))();

const PORT = configServer.server.port;

var compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(route);

app.use((err, req, res, next) => {
	res.status(err.status || 500).json({
		error: {
			status: err.status,
			message: err.message
		}
	});
});

app.listen(PORT, ()=>{
	console.info(`Listening on port ${PORT} http://localhost:${PORT}/`);
});