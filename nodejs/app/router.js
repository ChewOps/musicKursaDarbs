// app/router.js


var song = require('../api/songs');
module.exports = function(router) {
        router.route('/songs').post(function(req, res) { console.log(req.body); song.addSong(req,res); })
                              .get(function(req,res) { song.getAllSongs(req,res) });
                              .search(function(req,res) { song.getAllSongs(req,res) });
        router.route('*').get(function(req, res) {
                              res.sendfile('./html/home.html'); });
        router.route('/api/songs/:id')
                              .get((req, res) => { songs.findById(req, res); })
                              .put((req, res) => {songs.update(req, res, id)})
                              .delete((req, res) => { songs.deleteSong(req, res); })

        router.route('/api/songs/:song_id')
                              .get(function(req, res) {
                                 songs.getASong(req, res, req.params.song_id);
                                })
                              .put(function(req, res) {
                                 songs.updateSong(req, res, req.params.song_id);
                                })
                              .delete(function(req, res) {
                                 songs.deleteSong(req, res, req.params.song_id);
                                });

    //    router.route('/songs/:song_lyrics')
          //                     .get(function(req,res) { song.findByLyrics(req,res, req.params.song_lyrics) });
            //          });

};
