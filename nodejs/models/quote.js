// models/quote.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuoteSchema = new Schema({

    quote: String,
    author: String
});


module.exports = mongoose.model('Quote', QuoteSchema);

/*
All we are doing here is following the proper schema setup for mongoose
 and exporting it out as a module. The schema entails just a quote and an author.
*/
