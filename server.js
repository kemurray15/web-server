var express = require ('express');
var app = express();
var PORT = process.env.PORT || 3000;
//if we run the server.js locally it won't find the process.env.PORT so it will default
//to the 3000 value via the or operator

var middleware = require('./middleware.js');
//For assignment to move the middleware code to a new file, I forgot the '.' in the 
// the above string value and I forgot the module.exports = middleware code
// in the new middleware.js file.

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

