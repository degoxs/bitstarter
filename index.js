var express = require('express');
var app = express();
<<<<<<< HEAD
var fs = require('fs');
var outfile = 'index.html';
var out = fs.readFileSync(outfile,'utf-8');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send(out);
});
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:"+ out + "s "+ app.get('port'));
});
=======

app.get('/', function(request, response) {

 response.send("Hello World 2");
});

var port = process.env.PORT || 5000
app.listen(function() {
  console.log("Node app is running at localhost:" + port );
});

>>>>>>> b6f2db575503f1d7ccad4dc4ddd72ad35595b434
