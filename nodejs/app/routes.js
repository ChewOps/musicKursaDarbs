// app/routes.js
var mongoose = require('mongoose');
//var Quote = require('../api/quote');
var Song = require('../api/song');

 module.exports = function(app) {
        app.get('*', function(req, res) {
            res.sendfile('./html/home.html'); // load our public/index.html file
        });
        /*
        app.post('*', function(req, res){
          Quote.addQuote(req,res);
        });
        */

        app.post('*', function(req, res){
          Song.addSong(req,res);
        });

};
