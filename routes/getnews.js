var express = require("express");
var app = express();
var router = express.Router();
//setting up express app

//bringing in API key
var key = require('key');

//will be call to news api
router.post('NEWS API URL', function(req, res) {
  let newArticle = {
        title: thing.title,
        //etc.
    };
    new ArticleModel(newArticle).save(function(err, createdArticle) {
        if (err) { return next(err); }
        res.status(200).send(createdArticle);
    })
});

module.exports = router