// models/song.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = new Schema({

    title: String,
    artist: String,
    year: Number,
    genre: String,
    lyrics: String,

},{ versionKey: false }); // Gets rid of unnessecary __v value field in db


module.exports = mongoose.model('Song', SongSchema);

/*
All we are doing here is following the proper schema setup for mongoose
 and exporting it out as a module. Thte schema entails just a quote and an author.
*/
