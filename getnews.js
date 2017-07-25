var express = require("express");
var app = express();
var router = express.Router();
//setting up express app

//bringing in API key
var key = require('key');

var url = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey='

//will be call to news api
router.get(url + key, function(req, res) {
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

//potential loop needed

function insertNewArticles(articlesArray) {
  for(var i = 0; i <= 10; i++){
    let newArticle = {
          author: articlesArray.author,
          //etc.
      };
  }
}

/*

for each article in res.articles
let new article model equal all the parts of the article
create the array


then save?


mongoose docs: 

// pass an array
var array = [{ type: 'jelly bean' }, { type: 'snickers' }];
Candy.create(array, function (err, candies) {
  if (err) // ...

  var jellybean = candies[0];
  var snickers = candies[1];
  // ...
});


*/