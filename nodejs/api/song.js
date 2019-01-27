// api/quote.js

var Song = require('../models/song');

module.exports.getAllSongs = function(req, res) {
    Song.find(function(err, songs) {
        if (err) {
            res.send(err);
        }
        res.json({songs: songs});
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
 /*
This is a little more complicated. Once again we'll use module exports
 to create addQuote and getAllQuotes. getAllQuotes uses the Quote object
  which is the mongoose schema we created earlier. We have a lot of different
   queries available to us. This will find all the quotes and then display
    the response in json. addQuote will save the quote to the MongoDB database.
 */
