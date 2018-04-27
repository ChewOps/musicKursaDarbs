var express = require('express');
var app = express();
var fs = require("fs");
var obj;

app.get('/listSongs', function (req, res) {
   fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
       console.log( data );
       obj = JSON.parse(data);
       res.end( data );
   });
})

console.log(obj);

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})