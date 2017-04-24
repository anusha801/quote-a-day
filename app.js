var express = require('express');
var app = express();
app.use(express.static(__dirname + '/scripts'));
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/view/index.html');
});


var server = app.listen(process.env.PORT || 8082), function (request, response) {
    console.log("listening to port", port);
});
