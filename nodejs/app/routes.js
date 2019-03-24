// app/routes.js
var mongoose = require('mongoose');
//var Quote = require('../api/quote');
var Song = require('../api/songs');



var SongSchema = new mongoose.Schema({
    title: String,
    artist: String,
    year: Number,
    genre: String,
    lyrics: String
});

var SongModel = mongoose.model('song',SongSchema);
//New lines!

module.exports = function(app) {
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


    //    app.get('/api/song', function(req, res){
    //      Song.find({}, function(err, docs){
    //      if(err) res.send({error:err});
    //      else res.send({data:docs, "Song":"song"});
    //      });
    //    });
    app.get('/api/songs/:id', async (req, res) => {
        try {
          const song = await SongModel.findById(req.params.id).lean();
          if (!song) {
            return res.status(404).send({
              message: "Song not found",
              params: req.params
            });
          }
          res.status(200).send(song);
        }
        catch (error) {
          res.status(500).send({
            message: error.message
          });
        }
    });
  //      app.get('/api/songs/:id', function(req, res){
  //        console.log(req.params.id);
  //        SongModel.findById(req,res ,function(err, docs){
  //          if(err) res.send({error:err});
  //          else res.send({data:docs, "Song":"song"});
  //        })
  //      })
    var bodyParser = require('body-parser');

    app.use(bodyParser.urlencoded({ extended: false }));

        app.post('*', function(req, res){
          Song.addSong(req,res);
        });


};
