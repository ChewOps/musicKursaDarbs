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
  app.put('/api/songs/:id', function (req, res) {
    try {
      var song = Song.findByIdAndUpdate(req.params);
      if(!song) {
        return res.status(404).send({
          message: "Song not found",
          params: req.params
        });
      }
      //song = Song.update(song, req.body);
      res.status(200).send({song});
    } catch(error) {
      res.status(500).send({
        message: error.message
      });
    }
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
