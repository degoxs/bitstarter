var express = require('express');
var app = express();
var fs = require('fs');
var outfile = "index.html";
var out;
fs.wirteFileSync(outfile,out);
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send(out);
});
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:"+ out  + app.get('port'))
});
