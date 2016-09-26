// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var friends = require('./app/data/friends.js');

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server 

var app = express(); // Tells node that we are creating an "express" server
var PORT = 3000; 

// BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or 
// request data from various URLs. 

// var apiroute = require('./app/routing/api-routes.js')(app); 
// var htmlroute = require('./app/routing/html-routes.js')(app);

// LISTENER
// The below code effectively "starts" our server 

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

app.get('/', function (req, res){
	console.log('yo')
	res.sendFile(path.join(__dirname, './app/public/home.html'));
});

app.get('/survey.html', function (req, res){
	console.log('yo')
	res.sendFile(path.join(__dirname, './app/public/survey.html'));
});

app.post('/api/friends', function (req, res){
	console.log('work');
	res.json(friends.friendList);
	console.log("Yay");
		function greatMatch(name, image, difference) {
			name= name,
			image= image,
			difference = difference
		};
		var usrData 	= req.body;
		var usrName 	= usrData.name;
		var usrImage 	= usrData.image;
		var usrScores 	= usrData.scores;

		var totalDifference = 0;

		//loop through the friends data array of objects to get each friends scores
		for(var i = 0; i < friends.friendList.length-1; i++){
			console.log(friends.friendList[i].name);
			totalDifference = 0;

			//loop through that friends score and the users score and calculate the 
			// absolute difference between the two and push that to the total difference variable set above
			for(var i = 0; i < friends.friendList.length; i++){
				// We calculate the difference between the scores and sum them into the totalDifference
				totalDifference += Math.abs(parseInt(usrScores[i]) - parseInt(friends.friendList[i].scores));
				// If the sum of differences is less then the differences of the current "best match"
				if (totalDifference <= greatMatch.difference){

					var newMatch = new greatMatch(friends.friendList[i].name,friends.friendList[i].image, totalDifference)
						// console.log(newMatch);
					// // Reset the bestMatch to be the new friend. 
					// greatMatch.name = friends.friendList[i].name;
					// greatMatch.photo = friends.friendList[i].photo;
					// greatMatch.difference = totalDifference;
				}
			}
		}

		friends.friendList.push(usrData);
 
		// res.json(greatMatch)
		console.log(greatMatch);
});

