var express = require ('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit at ... ' + new Date().toString());
		next();
		
	},
	logger: function (req, res, next) {
		 console.log('Request: ' + req.method + ' ' + req.originalUrl + ' at ' + new Date().toString());
		 next();
	}
};

app.use(middleware.logger);

//How can I put a button in here so that I can go from one page to the
//next

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('My about page');
});

app.get('/testAbout', middleware.requireAuthentication, function (req, res) {
	res.send('My testAbout page');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function () {
	console.log('Express server started on PORT ' + PORT);
});

