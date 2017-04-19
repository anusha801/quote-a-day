var express = require('express');
var app = express();
app.use(express.static(__dirname + '/scripts'));
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/view/index.html');
});
var port = 3000;

var server = app.listen(port, function (request, response) {
    console.log("listening to port", port);
});