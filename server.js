/**
 * Created by increment on 06.08.16.
 */
var webpack = require('webpack'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	config = require('./webpack.config');

var app = new (require('express'))();
const PORT = 3000;

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html')
});
app.get('/taskList', function (req, res) {
	res.send(JSON.stringify({
		"tasks": [
			{
				"name": "Задача 1",
				"date": "2016-08-13",
				"time": "15:00:00",
				"category": "cat1",
				"VIP": true
			},
			{
				"name": "Задача 2",
				"date": "2016-08-13",
				"time": "16:00:00",
				"category": "cat1",
				"VIP": false
			},
			{
				"name": "Задача 3",
				"date": "2016-08-13",
				"time": "17:00:00",
				"category": "cat2",
				"VIP": false
			},
			{
				"name": "Задача 4",
				"date": "2016-08-13",
				"time": "18:00:00",
				"category": "cat2",
				"VIP": true
			},
			{
				"name": "Задача 1",
				"date": "2016-08-17",
				"time": "4:00:00",
				"category": "cat2",
				"VIP": true
			}
		]
	}));
});
app.get('/addedTask', function (req, res) {
	res.send('не реализовано');
});

app.listen(PORT, function (error) {
	if(error){
		console.log(error);
	}else{
		console.info(`Listening on port ${PORT} http://localhost:${PORT}/`);
	}
});