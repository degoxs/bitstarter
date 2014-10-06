var express = require('express');
var app = express();

app.get('/', function(request, response) {

 response.send("Hello World 2");
});

var port = process.env.PORT || 5000
app.listen(function() {
  console.log("Node app is running at localhost:" + port );
});

