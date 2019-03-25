// api/quote.js

var Song = require('../models/song');

module.exports.getAllSongs = function(req, res) {
    Song.find(function(err, song) {
        if (err) {
            res.send(err);
        }
        res.json({song: song});
    });
};

module.exports.getASong = function(req, res, id) {
    Song.findById(id, function(err, songs) {
        if (err) {
            return res.send(err);
        }
        res.json({song: song});
    });
};

module.exports.findById = function(req, res) {
  console.log(req.params.id);
    Song.findById(req.params.id ,function(err, data){
      if(err){console.log(err);}
      console.log(data);
      return res.send({
        song: data
      });
    });
};

module.exports.addSong = function(req,res) {
    var song = new Song(req.body.song);
    song.save(function(err) {
        if (err) {
            res.send(err);

        }
        res.json({song: song});
    });
};

module.exports.updateSong = function(req, res, id) {
        Song.findByIdAndUpdate(id, {$set: req.body.song}, function(err, song) {
            if (err) {
              return  res.send(err);
            };
            res.json({song: song});
        });
};

module.exports.deleteSong = function (id, req, res) {
     var query = {_id: id};
    Song.remove(query, song, res);
};
//module.exports.deleteSong = function(req, res, id) {
//        Song.findByIdAndRemove(id, function(err, song) {
//           if (err) {
//                res.send(err);
//           }
//            res.json({song: song});
//        });
//};

module.exports.findByLyrics = function(req, res) {
  console.log(req.params.lyrics);
    Song.find(req.params.lyrics ,function(err, data){
      if(err){console.log(err);}
      console.log(data);
      return res.send({
        song: data
      });
    });
};


 /*
This is a little more complicated. Once again we'll use module exports
 to create addQuote and getAllQuotes. getAllQuotes uses the Quote object
  which is the mongoose schema we created earlier. We have a lot of different
   queries available to us. This will find all the quotes and then display
    the response in json. addQuote will save the quote to the MongoDB database.
 */
