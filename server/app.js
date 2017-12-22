var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var moment = require('moment-timezone');
moment.tz.setDefault('Asia/Shanghai');
var jwt = require('jwt-simple');
app.use(bodyParser.urlencoded({limit:'10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb'}));

app.all('*', function (req, res, next) {
		// res.header("Access-Control-Allow-Origin", "http://rozwel.club");
	if (req.headers.origin == 'http://localhost:8080' || req.headers.origin == 'http://localhost:8001') {
		res.header("Access-Control-Allow-Origin", req.headers.origin);
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
		res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
		res.header("X-Powered-By", ' 3.2.1')
		res.header("Access-Control-Allow-Credentials", "true");
		res.header("Content-Type", "application/json;charset=utf-8");
	}
		next();
});


var routes = require('./route/index');
routes(app);


var server = app.listen(3001);

console.log('listen 3001');

var url = "mongodb://127.0.0.1:27017";
mongoose.Promise = global.Promise;
mongoose.connect(url, { useMongoClient: true });