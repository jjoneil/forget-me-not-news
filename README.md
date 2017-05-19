FINAL PROJECT - components

server(js) —————————

express
mongo

—
var express = require("express");

var app = express();

var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;
var db;
MongoClient.connect("mongodb://localhost", function(err, database){
	if(err){
		return console.log(err);
	}
	db = database;
	app.listen(8080, function(){
	console.log("Server started!");
	});
});
—
————————————————

Mongo data

_id

-headline

-date

-publication

-text

-tags

——————————————————

FRONT END

Simple by date
	Articles from various publications
leaning
	column of typically lib/typicallyconserv
popularity
	higher by number of comments?


________________________________


app.js

link up mongo to the html through
the jquery

___________________________________

Vue

webpack?


TODO today: wed mar 15

-get some mongo going… //DONE
-get that data from TWO articles to show up in the page //DONE
-with dates in the nav //DONE
-make navbar fixed //maybe later
-explore using vue //doing

______________________________________________________

TODO: thurs mar 16

APP.js

completely switch from jquery to vue //GETTING DONE
	collapse image div and text div into one //???????
	impliment vue app //DONE
	reorganize front end into template format //GETTING DONE

further to understand
	vue resource without webpack //DONE
		using that to eliminate jquery //DONE
		in the app.js, in the vue instance //DONE
	figure out where to include the components//DONE
	and what else they contain//nearly done
____________________________________

TODO: friday mar 17

	first: there is a container and box situation.
		in the hacknight proj, container is populated w/all the content
		by appending box to it for some reason
	figure that out with vue

	//maybe don't need any of that


	get the pubdate links in the side menu.



___________________________________________

Todo mon mar 20

make navbar fixed //done

____________________________________________

todo tues

figure out scaffolding!!!!!!!! //maybe done?
finish binding col 10 to mongo id //DONE
add input boxes to users can add tags to link to other articles


_____________________________________________

Wed

make pic and headline occupy same, equal, half spot of div over the article text
______________________________________________

Mon:

make click event for 'about' button that expands header
to show paragraph about the site. maybe.

figure out how to collapse sidenav horizontally

collapse and expand about me div in jumbotron
https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

done done done

___________________________________________________

jumbotron -

about me paragraph --  needs margin, font color and styling, padding, background color

Title and timeline open button -- inline elements

-----------------------------

sidebar -- needs background color, responsive width to smaller screens, collapse jumbotron as well (just include it in the main div)

-----------------------------

articles -- border around images, font styling, better background, fixed top margin


__________________________________
icebox:

seperate page to compare front page headlines from 10am daily
