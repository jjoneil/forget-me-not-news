let mongoose = require('mongoose');

module.exports = mongoose.model('Articles', {
    author : String,
    title : String,
    description : String,
    url : String,
    urlToImage : String,
    publishedAt : String
}, 'articles');