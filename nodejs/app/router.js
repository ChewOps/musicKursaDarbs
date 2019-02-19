// app/router.js
/*
 var quotes = require('../api/quote');
 module.exports = function(router) {


        router.route('/quotes').post(function(req, res) { console.log(req.body); quotes.addQuote(req,res); })
                              .get(function(req,res) { quotes.getAllQuotes(req,res) });
        router.route('*').get(function(req, res) {
            res.sendfile('./html/home.html'); // load our public/index.html file

        });
        */

var song = require('../api/songs');
module.exports = function(router) {
        router.route('/songs').post(function(req, res) { console.log(req.body); song.addSong(req,res); })
                              .get(function(req,res) { song.getAllSongs(req,res) });
        router.route('*').get(function(req, res) {
            res.sendfile('./html/home.html'); // load our public/index.html file

               });

};

/*
These routes are similar to what we had before except now we are using
 the router object. We have a new quotes route that executes
  the getAllQuotes module that we created earlier for get requests.
   If the agent connects with a post request then we send them to the addQuote module.
    The default route remains the same
*/
