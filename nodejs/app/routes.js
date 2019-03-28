// app/routes.js
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const SongsController = require('../api/songs');

const SongSchema = new mongoose.Schema({
  title: String,
  artist: String,
  year: Number,
  genre: String,
  lyrics: String
});

const Song = mongoose.model('song', SongSchema);

module.exports = (app) => {

  app.get('/api/songs', async (req, res) => {
    try {
      const songs = await Song.find({}).lean();
      res.status(200).send({songs});
    } catch(error) {
      res.status(500).send({
        message: error.message
      });
    }
  });

  app.get('/api/songs/:id', async (req, res) => {
    try {
      const song = await Song.findById(req.params.id).lean();
      if(!song) {
        return res.status(404).send({
          message: "Song not found",
          params: req.params
        });
      }
      res.status(200).send({song});
    } catch(error) {
      res.status(500).send({
        message: error.message
      });
    }
  });

  //app.get('/api/songs', function(req,res) {
	//   Song.find({},function(err,docs) {
	//	     if(err) {
	//		        res.send(err);
	//	          }
	//	     else {
	//		        res.send(docs);
	//	     }
	//   });
  //});
  app.put('/api/songs/:id', function (req, res) {
    var id = req.params.id;
    console.log("song update request received   "+id);
    var song = Song.findByIdAndUpdate(id, req.body.song, function(err, song){
    try {
      console.log(req.params);
      console.log(req.body);
      if(!song) {
        return res.status(404).send({
          message: "Song not found",
          params: req.params
        });
      }
        //console.log("song  received   ");
        //console.log(song);
      //song = Song.update(song, req.body);
      res.json(song);
    } catch(error) {
      res.status(500).send({
        message: error.message
      });
    }
    });
  });
  app.delete('/api/songs/:id', function(req, res){
    var id = req.params.id;
    Song.findByIdAndRemove(id, function(err, song){
        if(err){
            throw err;
        }
        else {
           res.json(song);
        }
    });
 });



  app.use(bodyParser.urlencoded({extended: false}));

  app.post('*', SongsController.addSong);
};
