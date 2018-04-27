var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);
app.use(express.static('html'));
app.get('/songs', function (req, res) {
   res.render( __dirname + "/html/" + "home.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      song_name:req.query.song_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})
