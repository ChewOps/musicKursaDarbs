// app/routes.js
var mongoose = require('mongoose');
var express = require('express');
//var Quote = require('../api/quote');
var Song = require('../api/songs');
var app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

mongoose.connect('mongodb://localhost/musicKursaDarbs');

var SongSchema = new mongoose.Schema({
    title: String,
    artist: String,
    year: Number,
    genre: String,
    lyrics: String
});

var SongModel = mongoose.model('song',SongSchema);
//New lines!
app.get('/api/',function(req,res) {
	res.send('Working');
});

app.listen('4500');

app.get('/api/songs', function(req,res) {
	SongModel.find({},function(err,docs) {
		if(err) {
			res.send(err);
		}
		else {
      var resp ={};
      for(doc in docs) {
        doc.type = "song";
      }
      resp.songs=docs;
			res.send(resp);
		}
	});
});

module.exports = function(app) {
        app.get('*', function(req, res) {
            res.sendfile('./html/home.html'); // load our public/index.html file
        });

        app.get('/api/song', function(req, res){
          Song.find({}, function(err, docs){
          if(err) res.send({error:err});
          else res.send({data:docs, "Song":"song"});
          });
        });

        app.post('*', function(req, res){
          Song.addSong(req,res);
        });


};
